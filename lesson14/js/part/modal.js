function modal(){


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
}
module.exports =modal;