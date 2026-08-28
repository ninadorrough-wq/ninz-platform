(function () {
  try {
    var savedTheme = window.localStorage.getItem("ninz-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  } catch (error) {
    // The site remains usable with the visitor's system preference.
  }
})();
