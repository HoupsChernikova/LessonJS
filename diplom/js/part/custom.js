function customization(){

	let ready=document.getElementById('ready');
    	cards=document.querySelector('.main-cards');
	    

	ready.addEventListener('click', () =>{
		custom.style.display = "none";
		index.style.display="block";
		let card = document.createElement('div');
		card.className = "main-cards-item";
		cards.appendChild(card);
		
		
	});

}
customization();