// BOUCLE CREATION DES 5 CARDS TEDDIES

function getTeddies(teddies) {

    for(let i = 0; i < teddies.length; i++) {
        
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card-body","bg-info");
        let div = document.getElementById("card");
        div.appendChild(cardDiv);
            
        let imgCard = document.createElement("img");
        cardDiv.appendChild(imgCard);
        imgCard.classList.add("card-image-top", "rounded-circle", "w-25", "img-fluid");
        imgCard.src = teddies[i].imageUrl;
    
        let titleCard = document.createElement("h3");
        cardDiv.appendChild(titleCard);
        titleCard.classList.add("card-title", "title");
        titleCard.textContent = teddies[i].name;

        let priceCard = document.createElement("p");
        cardDiv.appendChild(priceCard);
        priceCard.classList.add("card-text");
        priceCard.textContent = teddies[i].price + "€";

        let buttonCard = document.createElement("button");
        cardDiv.appendChild(buttonCard);
        buttonCard.classList.add("btn", "btn-success");
        buttonCard.setAttribute("type", "button");
        buttonCard.textContent = "En savoir plus";    
    }
    } 
    




    
    
      
// API REQUEST
const getAllTeddies = async function () {
    let response = await fetch("http://localhost:3000/api/teddies")
    if (response.ok) {
        let teddies = await response.json();
            getTeddies(teddies);
    } else {
        console.error("Error", response.status)
    }
}
getAllTeddies()
