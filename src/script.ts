let slideIndex:number = 1;

showSlides(slideIndex);

function plusSlides(n:number) {
    showSlides(slideIndex +=n);
}

function currentSlide(n:number) {
    showSlides(slideIndex = n)
}

function showSlides(n:number) {
    let i;
    let slides = document.getElementsByTagName('mySlides');
    let dots = document. getElementsByClassName('dot');
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length;i++){
        (slides[i] as HTMLElement).style.display = 'none';
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', "");
    }
    (slides[slideIndex-1] as HTMLElement).style.display= 'block';
    dots[slideIndex-1].className += ' active';
}