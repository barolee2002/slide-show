let slideIndex = 1;
let timeout
function plusSlides(n, no) {
  clearTimeout(timeout)

  showSlides(slideIndex[no] += n, no);
}
showSlides(slideIndex)
function currentSlide(n) {
  clearTimeout(timeout)
  showSlides(slideIndex = n)
}
function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
     slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++
  timeout=setTimeout(showSlides, 5000);
  
}