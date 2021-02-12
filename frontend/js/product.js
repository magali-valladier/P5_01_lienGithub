// RECUPERATION DE L'ID DANS L'URL

let urlSearch = new URLSearchParams(window.location.search);
let idTeddy = urlSearch.get("id");
 
//CREATION D'UNE FONCTION POUR RECUPERER UN TEDDY PAR SON ID UNIQUE
function getTeddy(teddies, idTeddy) {

    let myTeddy = teddies.find(teddies => teddies["_id"] == idTeddy);
    
}

// CREATION DE LA CARD PRINCIPALE CONTENANT LE PRODUIT
function createCard(myTeddy, idTeddy) {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-body","bg-info", "rounded", "w-75", "mx-auto");
    let div = document.getElementById("card");
    div.appendChild(cardDiv);

// CREATION DU CONTENU DE L'ELEMENT CARD (PRODUIT)

let imgCard = document.createElement("img");
cardDiv.appendChild(imgCard);
imgCard.classList.add("card-image-top", "rounded-circle", "w-25", "img-fluid");
imgCard.src = myTeddy.imageUrl;

let titleCard = document.createElement("h3");
cardDiv.appendChild(titleCard);
titleCard.classList.add("card-title", "title", "mt-auto", "mb-auto", "pl-50");
titleCard.textContent = myTeddy.name;

let priceCard = document.createElement("p");
cardDiv.appendChild(priceCard);
priceCard.classList.add("card-text", "mt-auto", "mb-auto");
priceCard.textContent = (myTeddy.price/10 + "€");

let infoCard = document.createElement("p");
cardDiv.appendChild(infoCard);
infoCard.classList.add("card-title", "title", "mt-auto", "mb-auto", "pl-50");
infoCard.textContent = myTeddy.description;

let color = document.createElement("h4");
cardDiv.appendChild(color);
color.textContent = "Choisissez votre couleur:";

let list = document.createElement("select");
cardDiv.appendChild(list);
let allColors = myTeddy.colors; 

for(let i = 0; i < allColors.length; i++) {

    let optionColor = document.createElement("option");
    list.appendChild(optionColor);
    optionColor.textContent = allColors[i];
    }
}
let teddies;
// RECUPERATION DE L'URL AVEC ID
const getTed = async function () {
    let response = await fetch("http://localhost:3000/api/teddies/" + idTeddy)
        if (response.ok) {
            let teddies = await response.json();
               createCard(teddies);
               console.log(teddies);
        } else {
        console.error("Error", response.status)
    }
}

// REACH API FUNCTION
getTed()
