const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}


const suppressChatbotTeaser = () => {
  const root = document.querySelector("chat-widget")?.shadowRoot;
  if (!root) return false;
  let safetyStyle = root.querySelector("#ninz-chat-safety");
  if (!safetyStyle) {
    safetyStyle = document.createElement("style");
    safetyStyle.id = "ninz-chat-safety";
    safetyStyle.textContent = ".lc_text-widget--prompt{display:none!important}";
    root.append(safetyStyle);
  }
  const bubble = root.querySelector("#lc_text-widget--btn");
  if (bubble && !bubble.dataset.ninzCollisionReady) {
    bubble.dataset.ninzCollisionReady = "true";
    const protectedContent = ".hero, .final-cta, .site-footer, .approved-contact, .consent-notice, .newsletter-panel, .menu-toggle";
    const avoidContentOverlap = () => {
      const bubbleRect = bubble.getBoundingClientRect();
      const overlaps = Array.from(document.querySelectorAll(protectedContent)).some((element) => {
        const rect = element.getBoundingClientRect();
        return rect.bottom > bubbleRect.top && rect.top < bubbleRect.bottom && rect.right > bubbleRect.left && rect.left < bubbleRect.right;
      });
      bubble.style.setProperty("visibility", overlaps ? "hidden" : "visible", "important");
    };
    let scheduled = false;
    const scheduleOverlapCheck = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        avoidContentOverlap();
      });
    };
    window.addEventListener("scroll", scheduleOverlapCheck, { passive: true });
    window.addEventListener("resize", scheduleOverlapCheck);
    avoidContentOverlap();
  }
  return true;
};

let chatbotTeaserAttempts = 0;
const chatbotTeaserTimer = window.setInterval(() => {
  chatbotTeaserAttempts += 1;
  if (suppressChatbotTeaser() || chatbotTeaserAttempts >= 30) window.clearInterval(chatbotTeaserTimer);
}, 400);
