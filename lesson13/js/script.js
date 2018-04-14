window.addEventListener('DOMContentLoaded', () => {

    let tab = document.getElementsByClassName('info-header-tab');
    tabContent = document.getElementsByClassName('info-tabcontent');
    info = document.getElementsByClassName('info-header')[0];
    //open tab
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    // show tab
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    // delegirovaniy
    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    //Timer
    let deadline = '2018-04-04';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        if (t < 0) {
            return {
                "total": 0,
                "hours": '00',
                "minutes": '00',
                "seconds": '00'
            };
        }


    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            let timeInterval = setInterval(updateClock, 1000);

            if (t.total <= 0) {
                clearInterval(timeInterval);

            }

        }
        updateClock();

    }
    setClock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', () => {
        more.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    //modall LEARN MORE INFORMATION
    let description_btn = document.querySelectorAll('.description-btn'),
        overlay_LMI = document.querySelector('.overlay'),
        close_LMI = document.querySelector('.popup-close');


    for (let i = 0; i < description_btn.length; i++) {

        description_btn[i].addEventListener('click', (event) => {
            event.target.classList.add('more-splash');
            overlay_LMI.style.display = "block";
            document.body.style.overflow = 'hidden';
        });
    }

    close_LMI.addEventListener('click', (event) => {
        overlay_LMI.style.display = "none";

        for (let i = 0; i < description_btn.length; i++) {
            description_btn[i].classList.remove('more-splash');
        }

        document.body.style.overflow = '';
    });

    //form
    var message = new Object();
    message.loading = "Загрузка...";
    message.success = "Спасибо! Скоро мы с вами свяжемся";
    message.failure = "Что-то пошло не так...";

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.appendChild(statusMessage);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //AJAX
        let request = new XMLHttpRequest();
        request.open("POST", 'server.php')

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    //contactform

    let formContact = document.getElementById('form'),
        inputContact = formContact.getElementsByTagName('input'),
        statussMessageContact = document.createElement('div');
    statussMessageContact.classList.add('statuss');
    formContact.appendChild(statussMessageContact);

    formContact.addEventListener('submit', function(event) {
        event.preventDefault();

        //AJAX2
        let request = new XMLHttpRequest();
        request.open("POST", 'server.php')

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statussMessageContact.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statussMessageContact.innerHTML = message.success;
                } else {
                    statussMessageContact.innerHTML = message.failure;
                }
            }
        }
        for (let i = 0; i < inputContact.length; i++) {
            inputContact[i].value = '';
        }
    });
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

    // Calculator

    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        if (this.value == '' || isNaN(this.value ) ) {
            totalValue.innerHTML = 0;
            personsSum = 0;
            calc();
        } else {
            totalValue.innerHTML = total;
            personsSum = +this.value;
            calc();
        }
    });

    restDays.addEventListener('change', function() {
        if (persons.value == ''|| isNaN(persons.value ) ) {
            totalValue.innerHTML = 0;
            daysSum = 0;
            calc();
        } else {
            totalValue.innerHTML = total;
            daysSum = +this.value;
            calc();
        }

    });

    place.addEventListener('change', function() {
        if (restDays.value == ''|| isNaN(restDays.value) || persons.value == ''|| isNaN(persons.value )) {
            totalValue.innerHTML = 0;
            calc();
        } else {
            calc();
        }

    });
    
    function calc(){
        total=(personsSum*daysSum)*4000*place.options[place.selectedIndex].value;
        totalValue.innerHTML=total;
    }


});