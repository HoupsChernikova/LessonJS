var stringMany, stringName


function showNameShop() {
    stringMany = prompt("Ваш бюджет?", "");
    while (isNaN(stringMany) || stringMany == '' || stringMany == null) {
        console.log("Ваш бюджет?");
        stringMany = prompt("Ваш бюджет?", "");
        console.log(stringMany);
    }
    stringName = prompt("Название вашего магазина?", "").toUpperCase();
}
showNameShop();

function getBudget() {
    return stringMany / 30;
}
alert(getBudget());

var mainList = {
    budget: stringMany,
    nameShop: stringName,
    shopGoods: [],
    employers: {},
    open: true,
};

var price = 100;
console.log(price);

function discont(discont) {
    if (discont) {
        return price * 0.8;
    }
    return price;
}

alert(discont(true));
alert(discont(false));

for (var i = 0; i < 3; i++) {
    var answer = prompt("Какой тип товаров будем продавать?", "juсe");
    console.log(answer);
    /* if ( typeof(answer) === 'string' && answer !== '' && answer.length < 50) {
         console.log('Все верно');
         mainList.shopGoods.push(answer);
     } else {
         console.log(' НЕ верно ');
     }*/
    while (typeof(answer) !== 'string' || answer === '' || answer.length > 50) {
        console.log('Не верно');
        answer = prompt("Какой тип товаров будем продавать?", "juсe");
        console.log(answer);
    }

    mainList.shopGoods.push(answer);
}

console.log(mainList);
var saveNumberEmployer = 1;

function hireEmployer(nameEmployer) {
    var emp = {};
    emp.name = nameEmployer;
    emp.num = saveNumberEmployer++;
    mainList.employers[emp.num]=emp.name;
}
for (var i = 0; i < 4; i++) {
    var nameEmployer = prompt('Введите имя сотрудника');
    while (typeof(nameEmployer) !== 'string'|| !isNaN(nameEmployer) || nameEmployer === '' || nameEmployer.length > 10 || stringMany == null) {
        console.log('Не верно');
        nameEmployer = prompt('Введите имя сотрудника');
        console.log(nameEmployer);
    }
    hireEmployer(nameEmployer);
}
console.log( mainList.employers)
/*
var i = 0;
while (i < 3) {
    var answer = prompt("Какой тип товаров будем продавать?", "juсe");
    mainList.shopGoods.push(answer);
    i++ == console.log(mainList);
}

/*
var i = 0;
do {
    var answer = prompt("Какой тип товаров будем продавать?", "juсe");
    mainList.shopGoods.push(answer);
    i++ == console.log(mainList);
}
while (i < 3)*/