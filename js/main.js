const target = document.getElementById("drawermenu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("navdrawer");
  nav.classList.toggle('in');
});