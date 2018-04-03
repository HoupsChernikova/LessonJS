var stringMany, stringName

function showNameShop() {
    stringName = prompt("Название вашего магазина?", "");
    while (!isNaN(stringName) || stringName == '' || stringName == null) {
        console.log("Название вашего магазина?");
        stringName = prompt("Название вашего магазина?", "");
        console.log(stringName);
    }
}
showNameShop();

function showBudget() {
    stringMany = prompt("Ваш бюджет?", "");
    while (isNaN(stringMany) || stringMany == '' || stringMany == null) {
        console.log("Ваш бюджет?");
        stringMany = prompt("Ваш бюджет?", "");
        console.log(stringMany);
    }
}
showBudget();


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

    while (typeof(answer) !== 'string' || answer === '' || answer.length > 50) {
        console.log('Не верно');
        answer = prompt("Какой тип товаров будем продавать?", "juсe");
        console.log(answer);
    }

    mainList.shopGoods.push(answer);
}


mainList.shopGoods.forEach(function(item, i, shopGoods) {
    if (i == 0) {
        return;
    }
    alert(i + ": " + item + " (У нас вы можете купить: " + shopGoods + ")");

});

for (let key in mainList.shopGoods) {
    console.log('Наш магазин включает в себя:' + mainList.shopGoods[key]);
}

console.log(mainList);
var saveNumberEmployer = 1;

function hireEmployer() {
    for (var i = 0; i < 4; i++) {
        var nameEmployer = prompt('Введите имя сотрудника');
        while (typeof(nameEmployer) !== 'string' || !isNaN(nameEmployer) || nameEmployer === '' || nameEmployer.length > 10 || stringMany == null) {
            console.log('Не верно');
            nameEmployer = prompt('Введите имя сотрудника');
            console.log(nameEmployer);
        }
        var emp = {};
        emp.name = nameEmployer;
        emp.num = saveNumberEmployer++;
        mainList.employers[emp.num] = emp.name;
    }
}

hireEmployer();

console.log(mainList.employers)