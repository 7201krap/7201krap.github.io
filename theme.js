/* Light by default; a saved choice is remembered per browser. The OS setting is ignored. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');

  function apply(theme, save) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    if (btn) {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to the light theme' : 'Switch to the dark theme');
    }
    if (save) { try { localStorage.setItem('site-theme', theme); } catch (e) {} }
  }

  var saved = null;
  try { saved = localStorage.getItem('site-theme'); } catch (e) {}
  apply(saved === 'dark' ? 'dark' : 'light', false);

  if (btn) {
    btn.addEventListener('click', function () {
      apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }

  /* Keep tabs and back-forward restores in sync. */
  window.addEventListener('storage', function (e) {
    if (e.key === 'site-theme') apply(e.newValue === 'dark' ? 'dark' : 'light', false);
  });
})();
