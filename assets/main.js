const NINZ_THEME_STORAGE_KEY = "ninz-theme";
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
const getActiveTheme = () => document.documentElement.getAttribute("data-theme") || (themeMedia.matches ? "dark" : "light");

const updateThemeToggle = (button) => {
  const activeTheme = getActiveTheme();
  const nextTheme = activeTheme === "dark" ? "light" : "dark";
  button.textContent = nextTheme === "dark" ? "Dark mode" : "Light mode";
  button.setAttribute("aria-label", `Switch to ${nextTheme} appearance`);
  button.setAttribute("aria-pressed", String(activeTheme === "dark"));
  button.dataset.activeTheme = activeTheme;
};

const installThemeToggle = () => {
  const siteNav = document.querySelector("#site-nav");
  if (!siteNav || siteNav.querySelector(".theme-toggle")) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "theme-toggle";
  const mobileAction = siteNav.querySelector(".mobile-nav-action");
  siteNav.insertBefore(button, mobileAction || null);
  updateThemeToggle(button);

  button.addEventListener("click", () => {
    const nextTheme = getActiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      window.localStorage.setItem(NINZ_THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
      // The selected theme remains active for the current page.
    }
    updateThemeToggle(button);
  });

  themeMedia.addEventListener?.("change", () => {
    if (!document.documentElement.hasAttribute("data-theme")) updateThemeToggle(button);
  });
};

installThemeToggle();

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
