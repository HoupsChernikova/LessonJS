window.addEventListener('DOMContentLoaded', () => {

    let nameCard = document.getElementsByClassName('.name'),
        ageCard = document.getElementsByClassName('.age'),
        sexCard = document.getElementsByClassName('.sex'),
        viewsCard = document.getElementsByClassName('.views'),
        bioCard = document.getElementsByClassName('.bio');

    let name = document.getElementById('name'),
        age = document.getElementById('age'),
        select = document.getElementById('select'),
        biography = document.getElementById('bio');


    let ready = document.getElementById('ready'),
        cards = document.querySelector('.main-cards');

    let prev = document.querySelector('.prev'),
        preview = document.querySelector('.preview'),
        next = document.querySelector('.next'),
        genderMale = document.getElementById('male'),
        genderFemfle = document.getElementById('female'),
        photoMin = document.querySelector('.photo '),
        personEasy = document.querySelector('.person-easy');
    currentSlide = 0;


    let index = document.querySelector('.main'),
        custom = document.querySelector('.custom');


    let close = document.getElementById('popup-btn'),
        modalWindow = document.querySelector('.popup'),
        overlay = document.querySelector('.overlay'),
        reset = document.getElementById('reset');
    let classNames;
    let firstRating = 0,
        secondRating = 0,
        thirdRating = 0;

    close.addEventListener('click', () => {
        addNewCundidat();
    });

    reset.addEventListener('click', () => {
        name.value = '';
        age.value = '';
        biography.value = '';
        addNewCundidat();

    });


    function addNewCundidat() {
        modalWindow.style.display = "none";
        overlay.style.display = "none";
        index.style.display = "none";

        custom.style.display = "flex";
        for (var i = 0; i < custom.children.length; i++) {
            custom.children[i].style.display = "block";
        }
    }
    const MyCardId = "myCardId";

    function createCard(name,
        photo,
        biographi,
        age,
        sex,
        views,
        bio) {
        let card = document.createElement('div');
        card.className = "main-cards-item";
        card.id = MyCardId;
        let template = `
                               <div class="candidate-block">
                                                <div class="photo ${photo}" ></div>
                                                <div id="res3" class="result">
                                                    <div class="result-count"></div>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="name">${name}</div>
                                            <div class="age">${age} лет</div>
                                            Пол:
                                            <div class="sex">${sex}</div>
                                            Полит. взгляды:
                                            <div class="views">${views}</div>
                                            Биография
                                            <div class="bio">${bio}</div>
                                        </div>`;
        card.innerHTML = template;
        return card;
    }



    ready.addEventListener('click', (event) => {
        if (name.value == '' || biography.value == '' || age.value == '') {
            event.preventDefault();
            alert('Вы не ввели ничего, есть пустые значения');           
            return event;

        }
        if (age.value < 18 || age.value > 100 || isNaN(age.value)) {
            event.preventDefault();
            alert('Вы ввели не действительный возраст кандидата.Возраст кандидата не может быть меньше 18 и больше 100');
           age.value='';
           
            return event;
        }
        let per_name = /[^А-я\s]+/i;
        if (per_name.test(name.value)) {
            event.preventDefault();
            alert('Разрешены только русские буквы');
             name.value='';           
            return event;

        }
        if (/[a-z]+/.test(biography.value)) {
            event.preventDefault();
            alert('Разрешены только русские буквы');
             biography.value='';
            return event;

        }
        /*else {
            name.value.toLowerCase();
        }*/


        addCustom(event);
        firstRating = 0;
        secondRating = 0;
        thirdRating = 0;
        setResult("res1", firstRating);
        setResult("res2", secondRating);
        setResult("res3", thirdRating);
    });

    let result = firstRating + secondRating + thirdRating;

    function random() {
        firstRating = getRandomInt(1, 100);
        secondRating = getRandomInt(1, 100);
        thirdRating = getRandomInt(1, 100);

        result = firstRating + secondRating + thirdRating;
        while (result !== 100) {
            irstRating = getRandomInt(1, 100);
            secondRating = getRandomInt(1, 100);
            thirdRating = getRandomInt(1, 100);
            result = firstRating + secondRating + thirdRating;
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function addCustom(event) {
        custom.style.display = "none";
        index.style.display = "block";


        let sex = "Неизвестно кто";
        if (genderMale.checked) {
            sex = "Мужчина";
        } else {
            if (genderFemfle.checked) {
                sex = "Женщина";
            }
        }

        let view = select.selectedOptions[0].innerText;

        var fullCard = createCard(
            name.value,
            addPhotoMin(currentSlide, isMan()),
            biography,
            age.value,
            sex,
            view,
            biography.value
        );



        let existingCard = document.getElementById(MyCardId);

        if (existingCard) {
            existingCard.remove();
        }
        cards.appendChild(fullCard);
    }

    let women = ['woman1', 'woman2', 'woman3', 'woman4'];
    let men = ['man1', 'man2', 'man3', 'man4'];

    function isMan() {
        return genderMale.checked;
    }

    goToSlide(currentSlide);


    prev.addEventListener('click', () => {
        goToSlide(currentSlide - 1);

    });

    next.addEventListener('click', () => {
        goToSlide(currentSlide + 1);

    });

    genderMale.addEventListener('change', () => {
        goToSlide(currentSlide);

    });

    genderFemfle.addEventListener('change', () => {
        goToSlide(currentSlide);

    });

    function goToSlide(n) {
        if (n < 0) {
            currentSlide = classNames.length - 1;
        } else if (n >= 4) {
            currentSlide = 0;
        } else {
            currentSlide = n;
        }

        classNames = isMan() ? men : women;
        preview.className = classNames[currentSlide];
        photo(currentSlide, isMan());
    }
    // add centre photo
    function photo(currentSlide, isMan) {



        let women = ['person-woman1', 'person-woman2', 'person-woman3', 'person-woman4'],
            men = ['person-man1', 'person-man2', 'person-man3', 'person-man4'];
        let classNames = isMan ? men : women;
        personEasy.className = classNames[currentSlide];


    }
    // add photoMin in index
    function addPhotoMin(currentSlide, isMan) {

        let women = ['photowomen1', 'photowomen2', 'photowomen3', 'photowomen4'],
            men = ['photomen1', 'photomen2', 'photomen3', 'photomen4'];

        let classNames = isMan ? men : women;

        return classNames[currentSlide];


    }
    //Voiting result 


    function setResult(id, value) {
        let res = document.getElementById(id);
        let progressBar = res.getElementsByClassName('progress-bar')[0];
        let resCount = res.getElementsByClassName('result-count')[0];
        resCount.innerText = value + '%';
        progressBar.style.height = value + '%';
        updateBorderCandidate();
    }
    // hold an election
    let honestVoting = document.getElementById("voting");
    let honestVotingExecuted = false;


    honestVoting.addEventListener('click', () => {
        if (honestVotingExecuted) {
            return;
        }

        random();

        setResult("res1", firstRating);
        setResult("res2", secondRating);
        setResult("res3", thirdRating);
        honestVotingExecuted = true;
        interveneExecuted = false;

    });

    let intervene = document.getElementById("crime");
    let interveneExecuted = false;

    intervene.addEventListener('click', () => {
        if (interveneExecuted || !honestVotingExecuted) {
            return;
        }
        if (firstRating <= 12 || secondRating <= 11 || thirdRating <= 0) {
            interveneExecuted = true;
            alert(' Вы не можете вмешатся в выборы, попробуйте проголосовать честно');
        } else {
            firstRating = firstRating - 13;
            secondRating = secondRating - 12;
            thirdRating = thirdRating + 25;
        }



        setResult("res1", firstRating);
        setResult("res2", secondRating);
        setResult("res3", thirdRating);
        interveneExecuted = true;
        honestVotingExecuted = false;

    });
    let active1 = document.getElementById('frame1'),
        active2 = document.getElementById('frame2'),
        active3 = document.getElementById(MyCardId);

    function borderCandidate(id, setBorder) {
        let elem = document.getElementById(id);
        elem.classList.toggle('main-cards-item-active', setBorder);
    }

    function updateBorderCandidate() {

        borderCandidate('frame1', false);
        borderCandidate('frame2', false);
        borderCandidate(MyCardId, false);

        if (firstRating > secondRating && firstRating > thirdRating) {
            borderCandidate('frame1', true);
        }
        if (secondRating > firstRating && secondRating > thirdRating) {
            borderCandidate('frame2', true);
        }
        if (thirdRating > firstRating && thirdRating > secondRating) {
            borderCandidate(MyCardId, true);
        }
    }





});