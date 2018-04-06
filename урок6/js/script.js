let button = document.getElementById('open-btn')

var choose_item = document.getElementById('items');


let btn = document.getElementsByTagName('button')

let goods_btn = document.getElementsByTagName('button')[1]
console.log(goods_btn);
let budget_btn = document.getElementsByTagName('button')[2]
console.log(budget_btn);
let emploers_btn = document.getElementsByTagName('button')[3]
console.log(emploers_btn);
let btn1 = document.getElementsByTagName('button')
console.log(btn1);


var goods_item = document.getElementsByClassName('goods-item');
console.log(goods_item);
var items_value = document.getElementsByClassName('items-value')[0];
console.log(items_value);
var isopen_value = document.getElementsByClassName('isopen-value')[0];
console.log(isopen_value);
var time_value = document.getElementsByClassName('time-value')[0];
console.log(time_value);
var employers_value = document.getElementsByClassName('employers-value')[0];
console.log(employers_value);
var count_budget_value = document.getElementsByClassName('count-budget-value')[0];
console.log(count_budget_value);
var hire_employers_item = document.getElementsByClassName('hire-employers-item');
console.log(hire_employers_item);
var budget = document.getElementsByClassName('budget-value');
console.log(budget);
var nameShop = document.getElementsByClassName('name-value');
console.log(nameShop);
var goods_value = document.getElementsByClassName('goods-value');
console.log(goods_value);


var el = document.body.querySelector(".main-functions .choose-item ");
console.log(el);
var elementsFld1 = document.querySelector('.main-functions .time-value');
console.log(elementsFld1);
var elementsFld2 = document.querySelector('.main-functions .count-budget-value');
console.log(elementsFld2);
var elementsFld3 = document.querySelectorAll('.main-functions .hire-employers-item');
console.log(elementsFld3);




var stringMany,
    stringName
var mainList = {
    budget: stringMany,
    nameShop: stringName,
    shopGoods: [],
    shopItems: [],
    employers: {},
    open: false,
}

button.addEventListener('click', () => {

    stringMany = prompt("Ваш бюджет?", "");
    while (isNaN(stringMany) || stringMany == '' || stringMany == null) {
        console.log("Ваш бюджет?");
        stringMany = prompt("Ваш бюджет?", "");
        console.log(stringMany);
    }
    budget[0].textContent = stringMany;


    stringName = prompt("Название вашего магазина?", "");
    while (!isNaN(stringName) || stringName == '' || stringName == null) {
        console.log("Название вашего магазина?");
        stringName = prompt("Название вашего магазина?", "");
        console.log(stringName);
    }
    nameShop[0].textContent = stringName;
});

goods_btn.addEventListener('click', () => {

    for (var i = 0; i < goods_item.length; i++) {
        var answer = goods_item[i].value;
        console.log(answer);

        while (typeof(answer) !== 'string' || answer.length > 50) {
            console.log('Не верно');
            answer = goods - item[i].value;
            console.log(answer);
        }

        mainList.shopGoods.push(answer);
        goods_value[0].textContent = mainList.shopGoods;
    }
});

choose_item.addEventListener('change', () => {
    let items = choose_item.value;
    if (isNaN(items || items != '')) {
        mainList.shopItems = items.split(',');
        mainList.shopItems.sort();
        items_value.textContent = mainList.shopItems;

    }
});

time_value.addEventListener('change', () => {
    let time = time_value.value;

    if (time < 0) {
        console.log('нет такого времени');
        mainList.open = false;
    } else if (time > 8 && time < 20) {
        console.log('Магазин открыт');
        mainList.open = true;
    } else if (time < 24) {
        console.log('Магазин закрыт');
        mainList.open = false;
    } else {
        console.log('В сутках 24 часа');
        mainList.open = false;
    }
    if (mainList.open == true) {
        isopen_value.style.backgroundColor = 'green'
    } else {
        isopen_value.style.backgroundColor = 'red'
    }
});


budget_btn.addEventListener('click', () => {
    count_budget_value.value = stringMany / 30;
});

emploers_btn.addEventListener('click', () => {
    for (var i = 0; i < hire_employers_item.length; i++) {
        var nameEmployer = hire_employers_item[i].value;
        mainList.employers[i]=nameEmployer;

  if (i == hire_employers_item.length - 1) {
            employers_value.textContent += mainList.employers[i];
  }
  else {
            employers_value.textContent += mainList.employers[i] + ',';
  }
    }
});