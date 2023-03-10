var allimages = ["slideshow_pics/arctic-hans-jurgen-mager.jpg","slideshow_pics/forest_irina_idriser.jpg", 
 "slideshow_pics/savanna_david_clode.jpg, slideshow_pics/david_clode_elephant.jpg, slideshow_pics/lucas_ludwig_tundra.jpg"]
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
    // slides[slideIndex-1].style.display = "block";
    return slideIndex;
}

$(document).ready(function() {
    // createDiv();
    $("#fadeIn").click(function() {
        var index = plusSlides(-1);
        var images = $(".croppedImg");
        console.log(images);

    //     images.each(function(index, img) {
    //         if($(img).hasClass('active')) {
    //           active = index;
    //           next = (index === images.length - 1) ? 0 : index + 1;
    //         }
    //       });
        
    //       $(images[active]).fadeOut(1000, function() {
    //         $(images[next]).fadeIn(1000);
    //       });
        
    //       $(images[next]).addClass('active');
    //       $(images[active]).removeClass('active');
    // }, 3000);
});
});

// function createDiv(){
//     /* get all files from the file gallery */
//     var fs = require('fs');
//     var files = fs.readdirSync('/slideshow_pics/');
// }