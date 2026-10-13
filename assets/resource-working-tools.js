/* No server submission or persistent storage. PDF editions support saved work. */
(() => {
  const form = document.querySelector('#resource-form');
  if (!form) return;
  const status = document.querySelector('.working-status');
  const syncPrint = () => {
    form.querySelectorAll('textarea').forEach(field => {
      let output = field.nextElementSibling;
      if (!output || !output.classList.contains('print-value')) {
        output = document.createElement('div');
        output.className = 'print-value';
        output.setAttribute('aria-hidden', 'true');
        field.after(output);
      }
      output.textContent = field.value || ' ';
    });
  };
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('input', syncPrint);
  window.addEventListener('beforeprint', syncPrint);
  document.querySelector('[data-resource-print]').addEventListener('click', () => {
    syncPrint();
    window.print();
  });
  document.querySelector('[data-resource-reset]').addEventListener('click', () => {
    if (!window.confirm('Clear your entries on this page? Save or print any work you want to keep first.')) return;
    form.reset();
    syncPrint();
    status.textContent = 'Entries cleared.';
  });
  syncPrint();
})();
