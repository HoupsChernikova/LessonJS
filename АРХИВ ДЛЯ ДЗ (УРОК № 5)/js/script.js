  var li = document.createElement('li');
  li.className = " menu-item";
  li.textContent = "Пятий пункт";
  let menu = document.querySelector('.menu');
  menu.appendChild(li);

  var clon = menu.children[1].cloneNode(true);
  var clonTwo = menu.children[2].cloneNode(true);
  menu.replaceChild(clonTwo, menu.children[1]);
  menu.replaceChild(clon, menu.children[2]);


  let title = document.getElementById('title')
  var s = title.innerText;
  title.innerText = s.replace("только", "только подлинную");


  let adv = document.querySelector('.adv');
  adv.parentElement.removeChild(adv);


  document.body.style.backgroundImage = 'url(img/apple_true.jpg)';


  var ask
  ask = prompt("Ваше отношение к технике APPLE?", "");
  