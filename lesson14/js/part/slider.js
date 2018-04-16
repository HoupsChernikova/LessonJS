function slider(){

    //Slider
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');


    showSlide(slideIndex);

    function showSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length;
        };
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        };
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    };

    function plusSlides(n) {
        showSlide(slideIndex += n)

    };
    prev.addEventListener('click', function() {
        plusSlides(-1);
        prev.classList.add('.fade');
    });
    next.addEventListener('click', function() {
        plusSlides(1);
        next.classList.add('.fade');
    });

    function currentSlide(n) {
        showSlide(slideIndex = n)
    };
    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }

    });
}
module.exports = slider;