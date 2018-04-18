function modal() {

    let close = document.getElementById('popup-btn'),
        modalWindow = document.querySelector('.popup'),
        index = document.querySelector('.main'),
        custom = document.querySelector('.custom'),
        overlay = document.querySelector('.overlay');



    close.addEventListener('click', () => {
        modalWindow.style.display = "none";
        overlay.style.display = "none";
        index.style.display = "none";

        custom.style.display = "flex";
        for (var i = 0; i < custom.children.length; i++) {
            custom.children[i].style.display = "block";
        }
    });

}

modal();