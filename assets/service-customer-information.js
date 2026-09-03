(() => {
  const services = Object.freeze({
    "ai-visibility-assessment": Object.freeze({
      label: "AI Visibility Assessment",
      price: "$297 one-time",
      payment: "https://link.fastpaydirect.com/payment-link/6a763b7eb4331c330fc60759"
    }),
    "ninz-visibility-monitor": Object.freeze({
      label: "NINZ Visibility Monitor™",
      price: "$150/month recurring",
      payment: "https://link.fastpaydirect.com/payment-link/6a766fd5e6d1fa40e99bb5f1"
    })
  });

  const form = document.querySelector("[data-service-customer-form]");
  const select = document.querySelector("[data-service-select]");
  const summary = document.querySelector("[data-service-summary]");
  const feedback = document.querySelector("[data-form-feedback]");
  const submit = form?.querySelector('button[type="submit"]');
  if (!form || !select || !summary || !feedback || !submit) return;

  const selectedService = () => Object.values(services).find((service) => service.label === select.value);
  const updateSummary = () => {
    const service = selectedService();
    summary.textContent = service ? service.label + ": " + service.price : "Choose one of the two available services.";
  };

  const requested = new URLSearchParams(window.location.search).get("service");
  if (requested && services[requested]) select.value = services[requested].label;
  updateSummary();
  select.addEventListener("change", updateSummary);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
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

    try {
      const body = new URLSearchParams(new FormData(form));
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      });
      if (!response.ok) throw new Error("Submission was not accepted.");
      feedback.textContent = "Information received. Opening secure payment.";
      window.location.assign(service.payment);
    } catch (error) {
      feedback.textContent = "Your information could not be submitted. Please try again or contact NINZ at info@ninz.me.";
      submit.disabled = false;
      submit.removeAttribute("aria-busy");
    }
  });

  window.NINZ_SERVICE_CUSTOMER_INFORMATION = Object.freeze({ services });
})();
