"""Read-only official-link audit; no credentials, filings or deployment."""
import concurrent.futures
import datetime
import hashlib
import json
import pathlib
import subprocess
import urllib.error
import urllib.request
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parent.parent


class TextParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self.skip = max(0, self.skip - 1)

    def handle_data(self, text):
        if not self.skip and text.strip():
            self.parts.append(text.strip())


data = json.loads(subprocess.check_output([
    "node", "-e",
    "global.window={};require('./assets/business-registration-data.js');console.log(JSON.stringify(window.NINZ_BUSINESS_REGISTRATION))"
], cwd=ROOT))
sources = data["federal_modules"]["ein"]["official_sources"][:]
for state in data["states"]:
    if state["state_code"] in ("TX", "KS", "AR", "MO", "CO"):
        sources.extend(state["official_sources"])


def check(source):
    result = {"source_id": source["source_id"], "url": source["url"],
              "checked_at": datetime.datetime.now(datetime.timezone.utc).isoformat()}
    request = urllib.request.Request(source["url"], headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            body = response.read()
            result.update(http_status=response.status, final_url=response.url,
                          content_type=response.headers.get("Content-Type", ""),
                          sha256=hashlib.sha256(body).hexdigest())
            parser = TextParser()
            if "pdf" not in result["content_type"]:
                parser.feed(body.decode("utf-8", errors="replace"))
            text = " ".join(parser.parts)
            lower = text.lower()
            result["visible_text_length"] = len(text)
            result["link_status"] = "reachable"
            if "page404" in response.url or "page not found" in lower or "404 not found" in lower:
                result["link_status"] = "soft_404"
            elif "this page has moved" in lower:
                result["link_status"] = "moved_placeholder"
            elif "access denied" in lower or "request rejected" in lower:
                result["link_status"] = "access_blocked"
            elif "pdf" not in result["content_type"] and len(text) < 150:
                result["link_status"] = "manual_review_required"
            result["note"] = "Reachability is not substantive requirement verification."
    except urllib.error.HTTPError as error:
        result.update(http_status=error.code, link_status="access_blocked" if error.code in (401, 403, 429) else "http_error", note=str(error))
    except (urllib.error.URLError, TimeoutError, OSError) as error:
        result.update(link_status="network_error", note=str(error))
    return result


with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    results = list(pool.map(check, sources))
report = {"checked_date": datetime.datetime.now(datetime.timezone.utc).date().isoformat(), "scope": "Five staged states and shared EIN module", "results": results}
destination = ROOT / "docs/business-registration-cohort-01-link-checks.json"
destination.write_text(json.dumps(report, indent=2) + "\n")
counts = {}
for item in results:
    counts[item["link_status"]] = counts.get(item["link_status"], 0) + 1
print(json.dumps({"sources": len(results), "results": counts, "report": str(destination)}, indent=2))
for item in results:
    if item["link_status"] != "reachable":
        print(item["source_id"], item["link_status"], item["url"])
