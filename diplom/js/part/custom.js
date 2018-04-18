function customization() {
    var nameCard = document.getElementsByClassName('.name'),
        ageCard = document.getElementsByClassName('.age'),
        sexCard = document.getElementsByClassName('.sex'),
        viewsCard = document.getElementsByClassName('.views'),
        bioCard = document.getElementsByClassName('.bio');

    let name = document.getElementById('name'),
        age = document.getElementById('age'),
        genderFemfle = document.getElementById('female'),
        genderMale = document.getElementById('male'),
        select = document.getElementById('select'),
        biography = document.getElementById('bio');




    let ready = document.getElementById('ready'),
        cards = document.querySelector('.main-cards');

  
    const MyCardId = "myCardId";
    function createCard(name, 
    		     photo,
    							biographi, 
    							age, 
    							sex, 
    							views, 
    							bio, 
    							resultCount) {
        let card = document.createElement('div');
        card.className = "main-cards-item";
        card.id = MyCardId;
        let template = `
							   <div class="candidate-block">
												<div class="photo ${photo}"></div>
												<div class="result">
													<div class="result-count">${resultCount}</div>
													<div class="progress">
														<div class="progress-bar progress-bar-2"></div>
													</div>
												</div>
											</div>
											<div class="name">${name}</div>
											<div class="age">${age}</div>
											Пол:
											<div class="sex">${sex}</div>
											Полит. взгляды:
											<div class="views">${views}</div>
											Биография
											<div class="bio">${bio}</div>
										</div>`;
								card.innerHTML = template;
        return card;
				}

    ready.addEventListener('click', () => {
        custom.style.display = "none";
        index.style.display = "block";
        let sex = "Х.з. кто";
        if(genderMale.checked)
        {
          sex = "Мужчина";
        }
        else
        {
        	 if(genderFemfle.checked)
        	 {
        	 	 sex = "Женщина";
        	 }
        }
        let view= select.selectedOptions[0].innerText;

        var fullCard = createCard(
        	name.value, 
    		     "photo-2",
    								biography, 
    							age.value, 
    							sex, 
    							view, 
    							biography.value, 
    							" 50%"
        	 );

        var existingCard = document.getElementById(MyCardId);
        if(existingCard) {
          existingCard.remove();
        }        
        cards.appendChild(fullCard);


    });





    
}
customization();