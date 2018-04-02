var stringName
var mainList = {
    nameShop: stringName,
    shopGoods: [],
    open: true,
};

function showNameShop() {
    stringName = prompt("Название вашего магазина?", "");
    while (!isNaN(stringName) || stringName == '' || stringName == null) {
        console.log("Название вашего магазина?");
        stringName = prompt("Название вашего магазина?", "");
        console.log(stringName);
    }
}
showNameShop();

for (var i = 0; i < 5; i++) {
    var answer = prompt("Какой тип товаров будем продавать?", "juсe");
    console.log(answer);

    while (typeof(answer) !== 'string' || answer === '' || answer.length > 50) {
        console.log('Не верно');
        answer = prompt("Какой тип товаров будем продавать?", "juсe");
        console.log(answer);
    }

    mainList.shopGoods.push(answer);
}

console.log(mainList);


mainList.shopGoods.forEach(function(item, i, shopGoods) {
    if (i == 0) {
        return;
    }
    alert(i + ": " + item + " (У нас вы можете купить: " + shopGoods + ")");

});


for (let key in mainList.shopGoods) {
    console.log('Наш магазин включает в себя:' + mainList.shopGoods[key]);
}