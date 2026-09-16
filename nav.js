// Sidebar open/close toggle. State is remembered per browser.
(function () {
  var KEY = 'sideCollapsed';
  var collapsed = false;
  try { collapsed = localStorage.getItem(KEY) === '1'; } catch (e) {}
  if (collapsed) document.documentElement.classList.add('side-collapsed');

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.className = 'side-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.title = 'Toggle sidebar';
    btn.textContent = '☰';
    document.body.appendChild(btn);
    btn.addEventListener('click', function () {
      var on = document.documentElement.classList.toggle('side-collapsed');
      try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    });
  });
})();
