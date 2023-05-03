window.onload = function () {
  const menu = document.querySelector("#menu");
  const show = document.querySelector("#show");
  const close_btn = document.querySelector("#close");

  show.addEventListener("click", function () {
    menu.classList.toggle("invisible");
  });

  close_btn.addEventListener("click", function () {
    menu.classList.toggle("invisible");
  });
};
