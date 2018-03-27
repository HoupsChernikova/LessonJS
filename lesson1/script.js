var stringMany = prompt("Ваш бюджет?", "");
var stringName = prompt("Название вашего магазина?", "");
stringMany=stringMany/30;
alert (stringMany);

var mainList = {
	budget: stringMany,
	nameShop: stringName,
	shopGoods: [],
	employers: {},
	open: true,
};

for (var i = 0; i < 3; i++) {
   var answer = prompt("Какой тип товаров будем продавать?", "juсe");
   mainList.shopGoods.push(answer);
}
console.log(mainList);

