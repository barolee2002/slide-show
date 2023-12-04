let slideIndex = 1;
let timeout
var slides = document.getElementsByClassName("slide-item");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex)
function plusSlides(n) {
  clearTimeout(timeout)
  slideIndex += (n - 1)
  showSlides(slideIndex);
}
function setCurrentSlide(n) {
  clearTimeout(timeout)
  slideIndex = n
  showSlides(slideIndex)
}
function showSlides(n) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slideIndex);
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++
  timeout = setTimeout(showSlides, 5000);
}