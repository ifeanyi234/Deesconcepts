const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

function showSlide(index) {
  slides[currentSlideIndex].classList.remove("active");
  slides[index].classList.add("active");
  currentSlideIndex = index;
}

function fadeInSlide(index) {
  slides[index].style.opacity = "1"; // Change opacity to fully opaque
}

function fadeOutSlide(index) {
  slides[index].style.opacity = "0"; // Change opacity to fully transparent
}

function nextSlide() {
  fadeOutSlide(currentSlideIndex);

  const nextIndex = (currentSlideIndex + 1) % slides.length;
  fadeInSlide(nextIndex);
  showSlide(nextIndex);
}

function startSlider() {
  fadeInSlide(currentSlideIndex);
  setInterval(nextSlide, 2000); // Change slide every 4 seconds
}

startSlider();
