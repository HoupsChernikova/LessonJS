function calculator(){

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
        if (this.value == '' || isNaN(this.value) || +this.value < 0) {
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
        if (persons.value == '' || isNaN(persons.value) || +persons.value < 0) {
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
        if (restDays.value == '' || isNaN(restDays.value) || persons.value == '' || isNaN(persons.value)) {
            totalValue.innerHTML = 0;
            calc();
        } else {
            calc();
        }

    });

    function calc() {
        total = (personsSum * daysSum) * 4000 * place.options[place.selectedIndex].value;
        totalValue.innerHTML = total;
    }

   } 
   module.exports = calculator;