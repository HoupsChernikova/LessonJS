var stringMany = prompt("Ваш бюджет?", "");
var stringName = prompt("Название вашего магазина?", "");
stringMany = stringMany / 30;
alert(stringMany);

var mainList = {
    budget: stringMany,
    nameShop: stringName,
    shopGoods: [],
    employers: {},
    open: true,
};


for (var i = 0; i < 3; i++) {
    var answer = prompt("Какой тип товаров будем продавать?", "juсe");
    console.log(answer);
    /* if ( typeof(answer) === 'string' && answer !== '' && answer.length < 50) {
         console.log('Все верно');
         mainList.shopGoods.push(answer);
     } else {
         console.log(' НЕ верно ');
     }*/
    while (typeof(answer) !==  'string' || answer === '' || answer.length > 50) {
        console.log('Не верно');
        answer = prompt("Какой тип товаров будем продавать?", "juсe");
        console.log(answer);
    }

    mainList.shopGoods.push(answer);
}

console.log(mainList);
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