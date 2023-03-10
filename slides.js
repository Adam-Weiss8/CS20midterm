let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    slides[slideIndex-1].style.display = "block";
    
}

$(document).ready(function() {
    // createDiv();
    $("#fadeIn").click(function() {
        console.log("tEXT");
        plusSlides(-1);
    });
});

// function createDiv(){
//     /* get all files from the file gallery */
//     var fs = require('fs');
//     var files = fs.readdirSync('/slideshow_pics/');
// }