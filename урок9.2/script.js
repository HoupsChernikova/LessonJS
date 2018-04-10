window.addEventListener('DOMContentLoaded', function() {
    let uname = document.getElementById('username');
    let firstname = document.getElementById('firstname');
    let yourAge = document.getElementById('yourAge');
    let btn = document.getElementById('btn');

    btn.addEventListener('click', showUser);
    
    function showUser() {
        alert("Пользователь " + uname.value + " " + firstname.value + ", его возраст " + yourAge.value);
    }
    
});

