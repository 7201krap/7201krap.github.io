// Sidebar open/close toggle.
(function () {
  // The sidebar always starts open when a page is loaded.

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.className = 'side-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.title = 'Toggle sidebar';
    btn.textContent = '☰';
    document.body.appendChild(btn);
    btn.addEventListener('click', function () {
      document.documentElement.classList.toggle('side-collapsed');
    });
  });
})();
