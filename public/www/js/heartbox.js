window.addEventListener("load", function () {
  const showhearttail = document.querySelector(".imminent-popup-tail");
  const showheartbox = document.querySelector(".imminent-popup-text");
  console.log(showheartbox);
  const shocheertail = document.querySelector(".time-limited-popup-tail");
  const showcheerbox = document.querySelector(".time-limited-popup-text");

  setTimeout(function () {
    showheartbox.style.opacity = 1;
    showhearttail.style.opacity = 1;
  }, 2000);
  setTimeout(function () {
    showheartbox.style.opacity = 0;
    showhearttail.style.opacity = 0;
  }, 4000);
  setTimeout(function () {
    shocheertail.style.opacity = 1;
    showcheerbox.style.opacity = 1;
  }, 2000);
  setTimeout(function () {
    shocheertail.style.opacity = 0;
    showcheerbox.style.opacity = 0;
  }, 4000);
});
