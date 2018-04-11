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
    let message = new Object();
    message.loading = "Загрузка...";
    message.success = "Спасибо! Скоро мы с вами свяжемся";
    message.failure = "Что-то пошло не так...";

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
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

    let formContact = document.getElementById('form'),
        inputContact = formContact.getElementsByTagName('input'),
        statusMessageContact = document.createElement('div'),
        statusMessageContact.classList.add('status');
        formСontact.appendChild(statusMessageContact);

    formContact.addEventListener('submit', function(event) {
        event.preventDefault();
        
        //AJAX
        let request = new XMLHttpRequest();
        request.open("POST", 'server.php')

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessageСontact.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessageContact.innerHTML = message.success;
                } else {
                    statusMessageContact.innerHTML = message.failure;
                }
            }
        }
        for (let i = 0; i < inputContact.length; i++) {
            inputContact[i].value = '';
        }
    });



});