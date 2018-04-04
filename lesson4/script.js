var stringMany, stringName

var mainList = {
    budget: stringMany,
    nameShop: stringName,
    shopGoods: [],
    employers: {},
    open: true,
    showNameShop: function showNameShop() {
      
    },
    showBudget: function showBudget() {
        
    },
    getBudget: function getBudget() {
        return stringMany / 30;
    },

    discont: function discont(discont) {
        if (discont) {
            return price * 0.8;
        }
        return price;
    },
    hireEmployer: function hireEmployer() {
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
    },
};

mainList.showNameShop();
mainList.showBudget();
alert(mainList.getBudget());

var price = 100;
console.log(price);

alert(mainList.discont(true));
alert(mainList.discont(false));

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
mainList.hireEmployer();
console.log(mainList.employers)