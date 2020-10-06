let toggle = document.querySelector('.switch');

if (localStorage.getItem('dark-theme')) {
    document.body.classList.add('dark-theme');
}

toggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (document.body.classList.contains('dark-theme')) {
    // Turning the theme off:
    document.body.classList.remove('dark-theme');
    localStorage.removeItem('dark-theme');
    // Reverse logic on the button text, so that users can turn
    // the theme back on:
  } else {
    document.body.classList.add('dark-theme');
    localStorage.setItem('dark-theme', true);
  }
});