var stringMany = prompt("Ваш бюджет?", "");
stringMany=stringMany/30;
console.log(stringMany);
var stringName = prompt("Название вашего магазина?", "");
var employers ={
		nameFirstEmployes: "Valiya",
		nameSecondEmployes: "Galiya",
	};
var mainList = {
	budget: 300,
	nameShop: "Shop God",
	shopGoods: [],
	employers: employers,
	open: true,
};

for (var i = 0; i < 3; i++) {
   var answer = prompt("Какой тип товаров будем продавать?", "juсe");
   mainList.shopGoods.push(answer);
}
console.log(mainList);

