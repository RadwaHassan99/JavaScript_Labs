window.addEventListener('load',function(){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    showSlides(1);
    slides[0].style.display = "none";
    dots[0].className = dots[0].className.replace(" active", "");  
    slides[0].style.display = "block"; 
    dots[0].className += " active";     
});

var slideIndex = 1;
function nextSlide(){
    showSlides(slideIndex += 1);
}

function prevSlide(){
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length){
    slideIndex = 1
  }    
  if (n < 1){
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if(slides[slideIndex-1]){
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";  
  } 
}

function automatic(){
  showSlides(slideIndex);
  slideIndex++;
}
setInterval(automatic,5000);
