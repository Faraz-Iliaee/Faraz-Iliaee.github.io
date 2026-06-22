(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  window.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const updateLabel = function () {
      toggle.textContent = document.documentElement.classList.contains('dark') ? '☀' : '☾';
    };

    updateLabel();

    toggle.addEventListener('click', function () {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      updateLabel();
    });
  });
})();
