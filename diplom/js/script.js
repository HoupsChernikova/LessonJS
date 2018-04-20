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

    close.addEventListener('click', () => {
        addNewCundidat();
    });

    reset.addEventListener('click', () => {
        addNewCundidat();
       
}
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
        bio,
        resultCount) {
        let card = document.createElement('div');
        card.className = "main-cards-item";
        card.id = MyCardId;
        let template = `
                               <div class="candidate-block">
                                                <div class="${photo} photo " ></div>
                                                <div class="result">
                                                    <div class="result-count">${resultCount}</div>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="name">${name}</div>
                                            <div class="age">${age}</div>
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
        addCustom(event);
    });



    function addCustom(event) {
        custom.style.display = "none";
        index.style.display = "block";
        if (name.value == '' || biography.value == '' || age.value == '' || isNaN(age.value)) {
            event.preventDefault();
            return event;

        }

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
            biography.value,
            // replaseText()
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
    let resCount = document.getElementsByClassName('result-count'),
        progressBar = document.getElementsByClassName('progress-bar2');

    //resultCount.innerText = first;

    function replaseText() {
        let first = 0,
            second = 0,
            third = 0;
        resCount[0] = first;
        resCount[1] = second;
        resCount[2] = third;



    }





});