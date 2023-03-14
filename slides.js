let slideIndex = 0;
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
    if (n > slides.length) {slideIndex = 0}
    if (n == 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += "active";
    captionText.innerHTML = dots[slideIndex].alt;
    slides[slideIndex].style.display = "block";
}

$(document).ready(function() {    
    /* Use the back button to get the last image */
    $("#fadeIn").click(function() {
        var slides = $(".mySlides");
        var stuff = $(".demo");
        var cap = $("#caption");

        if (slideIndex == 0) {
            slideIndex = slides.length - 1;
        }
        else {
            slideIndex--;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        for (i = 0; i < stuff.length; i++) {
            stuff[i].className = stuff[i].className.replace(" active", "");
        }

        stuff[slideIndex].className += "  active";
        cap[0].innerHTML = stuff[slideIndex].alt;
        $(slides[slideIndex]).fadeIn(2000).css("display", "block");

    });


    /* Use the back button to get the last image */
    $("#fadeOut").click(function() {
        var slides = $(".mySlides");
        var stuff = $(".demo");
        var cap = $("#caption");

        if (slideIndex == slides.length - 1) {
            slideIndex = 0;
        }
        else {
            slideIndex++;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        for (i = 0; i < stuff.length; i++) {
            stuff[i].className = stuff[i].className.replace(" active", "");
        }

        stuff[slideIndex].className += "  active";
        cap[0].innerHTML = stuff[slideIndex].alt;
        $(slides[slideIndex]).fadeIn(2000).css("display", "block");

    });
});