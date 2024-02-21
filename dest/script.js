"use strict";
function readDayAndHour() {
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentHour = currentDate.getHours();
    console.log("Today is " + daysOfWeek[dayOfWeek] + ".");
    console.log("The current Hour is:" + currentHour);
    if (dayOfWeek > 0) {
        if (currentHour > 9 && currentHour < 18)
            return true;
    }
    return false;
}
let openHours = readDayAndHour();
//This works so far change to have a it to true/false must be day 1-6 and hours
const imgElement = document.querySelector('.hrs-item img');
if (openHours) {
    imgElement.src = "../assets/images/open.png";
    imgElement.alt = "Open Sign";
}
else {
    imgElement.src = "../assets/images/Closed.png";
    imgElement.alt = "Closed Sign";
}
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
    let slides = document.getElementsByTagName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', "");
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
