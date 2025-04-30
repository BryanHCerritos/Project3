// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Multi-step form
let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  const x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  document.getElementById("prevBtn").style.display = n == 0 ? "none" : "inline";
  document.getElementById("nextBtn").innerHTML = n == (x.length - 1) ? "Submit" : "Next";
}

function nextPrev(n) {
  const x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  currentTab += n;
  if (currentTab >= x.length) {
    document.querySelector("form").submit();
    return false;
  }
  showTab(currentTab);
}
