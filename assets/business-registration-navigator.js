(function () {
  "use strict";

  var library = window.NINZ_BUSINESS_REGISTRATION;
  var form = document.querySelector("[data-state-search-form]");
  var input = document.querySelector("[data-state-search]");
  var status = document.querySelector("[data-state-search-status]");
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-state-item]"));

  if (!library || !form || !input || !status || !items.length) {
    return;
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function matchingStates(query) {
    var normalizedQuery = normalize(query);
    if (!normalizedQuery) {
      return library.states.slice();
    }
    return library.states.filter(function (record) {
      return normalize(record.state).indexOf(normalizedQuery) !== -1 ||
        normalize(record.state_code).indexOf(normalizedQuery) !== -1;
    });
  }

  function setStatus(message) {
    status.textContent = message;
  }

  function updateResults() {
    var query = input.value;
    var matches = matchingStates(query);
    var visible = {};

    matches.forEach(function (record) {
      visible[record.state_code] = true;
    });

    items.forEach(function (item) {
      item.hidden = !visible[item.getAttribute("data-state-code")];
    });

    if (!normalize(query)) {
      setStatus("50 states shown. Oklahoma is currently available.");
    } else if (matches.length === 0) {
      setStatus("No states match your search. Try a full state name or two-letter state code.");
    } else {
      var availableCount = matches.filter(function (record) {
        return record.publication_status === "published";
      }).length;
      setStatus(matches.length + (matches.length === 1 ? " state matches" : " states match") + ". " +
        availableCount + (availableCount === 1 ? " guide is" : " guides are") + " available.");
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    var query = normalize(input.value);
    var exact = library.states.find(function (record) {
      return normalize(record.state) === query || normalize(record.state_code) === query;
    });

    if (!query) {
      updateResults();
      input.focus();
      return;
    }

    if (!exact) {
      updateResults();
      setStatus("No exact state match was found. Choose a state from the list or enter its full name or two-letter code.");
      return;
    }

    if (exact.publication_status === "published" && exact.public_url) {
      window.location.assign(exact.public_url);
      return;
    }

    updateResults();
    setStatus(exact.state + " guide is coming soon.");
  }

  input.addEventListener("input", updateResults);
  form.addEventListener("submit", submitSearch);
  updateResults();
}());
