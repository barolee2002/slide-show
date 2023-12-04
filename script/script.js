let timeout
const slides = document.getElementsByClassName("slide-item");
const dots = document.getElementsByClassName("dot");
showSlides(1)
const curentSlideIndex = () => {
  let currentIndex = 0
  Array.from(slides).map((slide, index) => {
    if (slide.style.display == 'block') {
      currentIndex = index
    }
  })
  return currentIndex + 1
}
function plusSlides(n) {
  clearTimeout(timeout)
  showSlides(curentSlideIndex() + n);
}
function setCurrentSlide(n) {
  clearTimeout(timeout)
  showSlides(n)
}
function showSlides(slideIndex) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex < 1) { slideIndex = slides.length }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timeout = setTimeout(autoNextSlide, 5000)
}
function autoNextSlide() {
  showSlides(curentSlideIndex() + 1)
}
