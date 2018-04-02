var stringName


function showNameShop() {
    stringName = prompt("Название вашего магазина?", "");
    while (isNaN(stringName) || stringName == '' || stringName == null) {
        console.log("Название вашего магазина?");
        stringName = prompt("Название вашего магазина?", "");
        console.log(stringName);
    }
    stringName = prompt("Название вашего магазина?", "").toUpperCase();
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
var mainList = {
    nameShop: stringName,
    shopGoods: [],
    open: true,
};
console.log(mainList);

shopGoods.forEach(function(item, i, shopGoods) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});
