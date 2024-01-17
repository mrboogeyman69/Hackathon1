// JavaScript to toggle visibility of dropdown items
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds (2000ms)
}
    function showMenu(section) {
        // Hide all sections
        const sections = document.querySelectorAll('#menu section');
        sections.forEach(sec => {
            sec.style.display = 'none';
        });

        // Show the selected section
        document.getElementById(section).style.display = 'block';
    }

// Show the starters section by default
showMenu('starters');
document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownItems = document.getElementById("dropdown-items");

    dropdownButton.addEventListener("click", function() {
        if (dropdownItems.style.display === "none" || dropdownItems.style.display === "") {
            dropdownItems.style.display = "block";
        } else {
            dropdownItems.style.display = "none";
        }
    });
});

