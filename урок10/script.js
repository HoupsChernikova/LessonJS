/*window.addEventListener('DOMContentLoaded', function() {
    let uname = document.getElementById('username');
    let firstname = document.getElementById('firstname');
    let yourAge = document.getElementById('yourAge');
    let btn = document.getElementById('btn');

    btn.addEventListener('click', showUser);
    
    function showUser() {
        alert("Пользователь " + uname.value + " " + firstname.value + ", его возраст " + yourAge.value);
    }
    
});*/

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    fun(text) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let a =`height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        div.style.cssText = a;
        div.innerText = text;
    }
}

window.addEventListener('DOMContentLoaded', function() {
    let optCss = new Options('100px', '200px', 'red', '28px', 'left');
    optCss.fun('Привет, мир !!!');
})