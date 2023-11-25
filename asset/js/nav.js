const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", function () {
  navbar.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  navbar.classList.remove("active");
});
