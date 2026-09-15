(() => {
  const services = Object.freeze({
    "ai-visibility-assessment": Object.freeze({
      id: "ai-visibility-assessment",
      label: "AI Visibility Assessment",
      price: "$297 one-time",
      value: 297,
      payment: "https://link.fastpaydirect.com/payment-link/6a763b7eb4331c330fc60759"
    }),
    "ninz-visibility-monitor": Object.freeze({
      id: "ninz-visibility-monitor",
      label: "NINZ Visibility Monitor™",
      price: "$150/month recurring",
      value: 150,
      payment: "https://link.fastpaydirect.com/payment-link/6a766fd5e6d1fa40e99bb5f1"
    })
  });

  const form = document.querySelector("[data-service-customer-form]");
  const select = document.querySelector("[data-service-select]");
  const summary = document.querySelector("[data-service-summary]");
  const feedback = document.querySelector("[data-form-feedback]");
  const submit = form?.querySelector('button[type="submit"]');
  const website = form?.elements.namedItem("Website URL");
  if (!form || !select || !summary || !feedback || !submit || !(website instanceof HTMLInputElement)) return;

  const normalizeWebsiteValue = (value) => {
    const entered = value.trim();
    if (!entered) throw new TypeError("Enter a website domain or URL.");

    const candidate = /^[a-z][a-z\d+.-]*:\/\//i.test(entered) ? entered : `https://${entered}`;
    const parsed = new URL(candidate);
    if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname || /\s/.test(parsed.hostname)) {
      throw new TypeError("Enter a valid website domain or URL.");
    }
    return parsed.href;
  };

  const normalizeWebsite = () => {
    try {
      website.value = normalizeWebsiteValue(website.value);
      website.setCustomValidity("");
      return true;
    } catch (error) {
      website.setCustomValidity("Enter a valid domain or URL, such as example.com or https://example.com.");
      return false;
    }
  };

  const selectedService = () => Object.values(services).find((service) => service.label === select.value);
  const updateSummary = () => {
    const service = selectedService();
    summary.textContent = service ? service.label + ": " + service.price : "Choose one of the two available services.";
  };

  const requested = new URLSearchParams(window.location.search).get("service");
  if (requested && services[requested]) select.value = services[requested].label;
  updateSummary();
  select.addEventListener("change", updateSummary);
  website.addEventListener("input", () => website.setCustomValidity(""));
  website.addEventListener("blur", normalizeWebsite);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const websiteIsValid = normalizeWebsite();
    if (!websiteIsValid || !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const service = selectedService();
    if (!service) {
      feedback.textContent = "Choose an available service before continuing.";
      select.focus();
      return;
    }

    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    feedback.textContent = "Saving your information before secure payment.";

    const controller = new AbortController();
    const submissionTimeout = window.setTimeout(() => controller.abort(), 5000);

    try {
      const body = new URLSearchParams(new FormData(form));
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        credentials: "same-origin",
        signal: controller.signal
      });
      if (!response.ok) throw new Error("Submission was not accepted.");
      feedback.textContent = "Information received. Opening secure payment.";
    } catch (error) {
      feedback.textContent = "Opening secure payment. NINZ will confirm your service details after purchase.";
    } finally {
      window.clearTimeout(submissionTimeout);
    }

    window.gtag?.("event", "begin_checkout", {
      currency: "USD",
      value: service.value,
      items: [{ item_id: service.id, item_name: service.label, price: service.value, quantity: 1 }]
    });
    window.location.assign(service.payment);
  });

  window.NINZ_SERVICE_CUSTOMER_INFORMATION = Object.freeze({ services, normalizeWebsiteValue });
})();
