(function () {
  const library = window.NINZ_FAQ_LIBRARY;
  if (!library) return;

  const byId = new Map(library.faqs.map((faq) => [faq.faq_id, faq]));
  const resources = new Map(library.resources.map((resource) => [resource.resource_id, resource]));
  const searchInput = document.querySelector("[data-faq-search]");
  const results = document.querySelector("[data-faq-results]");
  const featured = document.querySelector("[data-faq-featured]");
  const categories = document.querySelector("[data-faq-categories]");
  const categoryList = document.querySelector("[data-faq-category-list]");
  const categorySlug = document.body.dataset.faqCategory || "";

  const text = (value) => String(value || "");

  const escapeHtml = (value) => text(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const appendInline = (parent, value) => {
    if (Array.isArray(value)) {
      value.forEach((part) => appendInline(parent, part));
      return parent;
    }
    if (value && typeof value === "object") {
      const el = document.createElement(value.emphasis ? "strong" : "span");
      el.textContent = text(value.text);
      parent.append(el);
      return parent;
    }
    parent.append(document.createTextNode(text(value)));
    return parent;
  };

  const blockText = (block) => block?.parts || block?.text || "";

  const renderBlock = (block) => {
    if (!block || typeof block !== "object") return document.createDocumentFragment();

    if (block.type === "heading") {
      const level = Math.min(Math.max(Number(block.level) || 3, 2), 4);
      const heading = document.createElement(`h${level}`);
      heading.textContent = text(block.text);
      return heading;
    }

    if (block.type === "list") {
      const list = document.createElement(block.style === "ordered" ? "ol" : "ul");
      (block.items || []).forEach((item) => {
        const li = document.createElement("li");
        appendInline(li, Array.isArray(item) || typeof item === "string" ? item : item.parts || item.text);
        list.append(li);
      });
      return list;
    }

    if (block.type === "example") {
      const card = document.createElement("div");
      card.className = "card";
      const label = document.createElement("h3");
      label.textContent = block.label || "Example";
      const copy = document.createElement("p");
      appendInline(copy, blockText(block));
      card.append(label, copy);
      return card;
    }

    const paragraph = document.createElement("p");
    appendInline(paragraph, blockText(block));
    return paragraph;
  };

  const renderBlocks = (blocks) => {
    const fragment = document.createDocumentFragment();
    (blocks || []).forEach((block) => fragment.append(renderBlock(block)));
    return fragment;
  };

  const renderMisconceptions = (items) => {
    const grid = document.createElement("div");
    grid.className = "card-grid";
    (items || []).forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      const icon = document.createElement("span");
      icon.className = "line-icon";
      icon.setAttribute("aria-hidden", "true");
      const title = document.createElement("h3");
      title.textContent = text(item.title);
      card.append(icon, title);
      if (Array.isArray(item.explanation_blocks)) {
        card.append(renderBlocks(item.explanation_blocks));
      } else {
        const copy = document.createElement("p");
        appendInline(copy, item.explanation || "");
        card.append(copy);
      }
      grid.append(card);
    });
    return grid;
  };

  const renderSources = (sources) => {
    const grid = document.createElement("div");
    grid.className = "card-grid";
    (sources || []).forEach((source) => {
      const card = document.createElement("div");
      card.className = "card";
      const icon = document.createElement("span");
      icon.className = "line-icon";
      icon.setAttribute("aria-hidden", "true");
      const title = document.createElement("h3");
      title.textContent = text(source.source_title);
      const publisher = document.createElement("p");
      publisher.textContent = [source.source_publisher, source.source_type].filter(Boolean).join(" | ");
      card.append(icon, title, publisher);
      if (source.source_url) {
        const link = document.createElement("a");
        link.className = "learn-more";
        link.href = source.source_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "View Source";
        card.append(link);
      }
      if (source.supported_claims?.length) {
        const claims = document.createElement("p");
        claims.textContent = `Supports: ${source.supported_claims.join("; ")}`;
        card.append(claims);
      }
      if (source.date_accessed || source.publication_or_update_date) {
        const dates = document.createElement("p");
        dates.textContent = [
          source.publication_or_update_date ? `Published/updated: ${source.publication_or_update_date}` : "",
          source.date_accessed ? `Accessed: ${source.date_accessed}` : ""
        ].filter(Boolean).join(" | ");
        card.append(dates);
      }
      grid.append(card);
    });
    return grid;
  };

  const renderRelatedFaqs = (ids) => {
    const grid = document.createElement("div");
    grid.className = "card-grid";
    (ids || []).map((id) => byId.get(id)).filter(Boolean).forEach((faq) => {
      const card = document.createElement(faq.content_status === "published" ? "a" : "div");
      card.className = faq.content_status === "published" ? "card link-card" : "card";
      if (faq.content_status === "published") card.href = resolveUrl(faq.canonical_url.replace("https://ninz.me/", ""));
      const icon = document.createElement("span");
      icon.className = "line-icon";
      icon.setAttribute("aria-hidden", "true");
      const title = document.createElement("h3");
      title.textContent = faq.question;
      const status = document.createElement("p");
      status.textContent = statusLabel(faq);
      card.append(icon, title, status);
      grid.append(card);
    });
    return grid;
  };

  const renderRelatedGuides = (ids) => {
    const grid = document.createElement("div");
    grid.className = "card-grid";
    (ids || []).map((id) => resources.get(id)).filter(Boolean).forEach((resource) => {
      const card = document.createElement(resource.url ? "a" : "div");
      card.className = resource.url ? "card link-card" : "card";
      if (resource.url) card.href = resolveUrl(resource.url);
      const icon = document.createElement("span");
      icon.className = "line-icon";
      icon.setAttribute("aria-hidden", "true");
      const title = document.createElement("h3");
      title.textContent = resource.title;
      card.append(icon, title);
      if (resource.url) {
        const more = document.createElement("span");
        more.className = "learn-more";
        more.textContent = "Open Resource";
        card.append(more);
      }
      grid.append(card);
    });
    return grid;
  };

  const renderContinueJourney = (journey) => {
    const wrapper = document.createDocumentFragment();
    if (!journey) return wrapper;
    const heading = document.createElement("h2");
    heading.textContent = journey.heading || journey.label || "Continue your journey.";
    wrapper.append(heading);
    if (Array.isArray(journey.blocks)) {
      wrapper.append(renderBlocks(journey.blocks));
    } else {
      const copy = document.createElement("p");
      copy.textContent = journey.copy || journey.label || "";
      wrapper.append(copy);
    }
    const target = journey.id ? resources.get(journey.id) || byId.get(journey.id) : null;
    const targetUrl = target?.url || target?.canonical_url;
    if (targetUrl && (target.status !== "planned") && (target.content_status !== "pending_approved_copy")) {
      const actions = document.createElement("div");
      actions.className = "hero-actions";
      const link = document.createElement("a");
      link.className = "btn primary";
      link.href = resolveUrl(targetUrl.replace("https://ninz.me/", ""));
      link.textContent = journey.button_text || journey.label || "Continue";
      actions.append(link);
      wrapper.append(actions);
    }
    return wrapper;
  };

  const createSection = (eyebrow, heading, content, className = "section") => {
    const section = document.createElement("section");
    section.className = className;
    const sectionHeading = document.createElement("div");
    sectionHeading.className = "section-heading";
    const eyebrowEl = document.createElement("p");
    eyebrowEl.className = "eyebrow";
    const dot = document.createElement("span");
    dot.setAttribute("aria-hidden", "true");
    eyebrowEl.append(dot, document.createTextNode(eyebrow));
    const headingEl = document.createElement("h2");
    headingEl.textContent = heading;
    sectionHeading.append(eyebrowEl, headingEl);
    section.append(sectionHeading, content);
    return section;
  };

  const renderPlainCopy = (value) => {
    const paragraph = document.createElement("p");
    appendInline(paragraph, value);
    return paragraph;
  };

  const renderFaqArticle = (mount, faq) => {
    if (!mount || !faq) return;
    mount.replaceChildren();
    const quickAnswer = document.createDocumentFragment();
    quickAnswer.append(renderPlainCopy(faq.short_answer));

    const sections = [
      ["Quick Answer", faq.question, quickAnswer, "quick-answer interior-quick"],
      ["Detailed Explanation", "What you need to know.", renderBlocks(faq.detailed_explanation), "section"],
      ["Common Misconceptions", "Clear up common confusion.", renderMisconceptions(faq.common_misconceptions), "section"],
      ["Related Questions", "Keep learning.", renderRelatedFaqs(faq.related_faq_ids), "section"],
      ["Related Learning Center Guides", "Helpful next reading.", renderRelatedGuides(faq.related_guide_ids), "section"]
    ];
    sections.forEach(([eyebrow, heading, content, className]) => mount.append(createSection(eyebrow, heading, content, className)));

    const journeySection = document.createElement("section");
    journeySection.className = "final-cta";
    const journeyEyebrow = document.createElement("p");
    journeyEyebrow.className = "eyebrow";
    const journeyDot = document.createElement("span");
    journeyDot.setAttribute("aria-hidden", "true");
    journeyEyebrow.append(journeyDot, document.createTextNode("Continue Your Journey"));
    journeySection.append(journeyEyebrow, renderContinueJourney(faq.continue_your_journey));
    mount.append(journeySection);

    const insight = document.createDocumentFragment();
    insight.append(renderPlainCopy(faq.ninz_insight));
    mount.append(createSection("NINZ Insight", "A practical takeaway.", insight, "quick-answer"));
    mount.append(createSection("Sources & References", "References supporting this answer.", renderSources(faq.sources), "section"));
  };

  window.NINZ_FAQ_RENDERER = {
    renderBlock,
    renderBlocks,
    renderMisconceptions,
    renderSources,
    renderRelatedFaqs,
    renderRelatedGuides,
    renderContinueJourney,
    renderPlainCopy,
    renderFaqArticle
  };

  const resolveUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http") || url.startsWith("#")) return url;
    if (document.body.dataset.siteDepth === "3") return `../../../${url}`;
    return document.body.dataset.siteDepth === "2" ? `../../${url}` : `../${url}`;
  };

  const normalize = (value) => String(value || "").toLowerCase();

  const searchableText = (faq) => [
    faq.question,
    faq.short_answer,
    faq.opening_context,
    faq.category,
    faq.subcategory,
    ...(faq.search_aliases || []),
    ...(faq.keywords || []),
    ...(faq.topic_tags || [])
  ].map(normalize).join(" ");

  const visibleFaqs = () => library.faqs.filter((faq) => faq.content_status === "published" && (!categorySlug || faq.category_slug === categorySlug));

  const statusLabel = (faq) => {
    if (faq.content_status === "published") return "Read Answer";
    return "Approved answer pending";
  };

  const faqCard = (faq) => {
    const status = statusLabel(faq);
    const published = faq.content_status === "published";
    const url = published ? resolveUrl(faq.canonical_url.replace("https://ninz.me/", "")) : "";
    const related = (faq.related_faq_ids || []).map((id) => byId.get(id)?.question).filter(Boolean).slice(0, 3);
    const body = `<span class="line-icon" aria-hidden="true"></span><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.category)}${faq.subcategory ? " | " + escapeHtml(faq.subcategory) : ""}</p><p>${escapeHtml(status)}</p>${related.length ? `<p>Related: ${escapeHtml(related.join(", "))}</p>` : ""}`;
    if (published && url) return `<a class="card link-card" href="${url}">${body}<span class="learn-more">Read Answer</span></a>`;
    return `<div class="card">${body}</div>`;
  };

  const categoryCard = (category) => {
    const count = library.faqs.filter((faq) => faq.category_slug === category.slug && faq.content_status === "published").length;
    const href = category.publicly_visible ? `${category.slug}/` : "";
    const body = `<span class="line-icon" aria-hidden="true"></span><h3>${escapeHtml(category.name)}</h3><p>${escapeHtml(category.description)}</p><p>${count} published FAQ${count === 1 ? "" : "s"}</p>`;
    if (href) return `<a class="card link-card" href="${href}">${body}<span class="learn-more">Browse Topic</span></a>`;
    return `<div class="card">${body}</div>`;
  };

  const render = (target, faqs, emptyMessage) => {
    if (!target) return;
    target.innerHTML = faqs.length ? faqs.map(faqCard).join("") : `<div class="card"><span class="line-icon" aria-hidden="true"></span><h3>No matching FAQs yet</h3><p>${emptyMessage}</p></div>`;
  };

  if (featured) render(featured, visibleFaqs().slice(0, 6), "Try a broader search or browse by topic.");
  if (categoryList) render(categoryList, visibleFaqs(), "Approved FAQ content is being prepared.");
  if (categories) {
    const usefulCategories = library.categories.filter((category) => category.publicly_visible && library.faqs.some((faq) => faq.category_slug === category.slug));
    categories.innerHTML = usefulCategories.map(categoryCard).join("");
  }

  if (searchInput && results) {
    const allFaqs = visibleFaqs();
    render(results, allFaqs.slice(0, 6), "Search by question, keyword, alias, category, or topic.");
    searchInput.addEventListener("input", () => {
      const query = normalize(searchInput.value).trim();
      const matches = query ? allFaqs.filter((faq) => searchableText(faq).includes(query)) : allFaqs.slice(0, 6);
      render(results, matches, "Search by question, keyword, alias, category, or topic.");
    });
  }


  const articleMount = document.querySelector("[data-faq-article]");
  const articleId = document.body.dataset.faqId;
  if (articleMount && articleId) {
    renderFaqArticle(articleMount, byId.get(articleId));
  }

  document.querySelectorAll("[data-resource-link]").forEach((el) => {
    const resource = resources.get(el.dataset.resourceLink);
    if (resource && resource.url) el.setAttribute("href", resolveUrl(resource.url));
  });
})();
