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
infoCard.classList.add("card-title","font-italic", "title", "mt-auto", "mb-auto", "pl-50");
infoCard.textContent = myTeddy.description;

let color = document.createElement("h4");
color.classList.add("mt-5");
cardDiv.appendChild(color);
color.textContent = "Choisissez votre couleur dans la liste:";

let list = document.createElement("select");
list.id = "selectColor";
list.setAttribute("name", "select");
cardDiv.appendChild(list);
let allColors = myTeddy.colors; 


// CREATION D'UNE BOUCLE POUR CREER LES OPTIONS COULEUR

for(let i = 0; i < allColors.length; i++) {

    let optionColor = document.createElement("option");
    list.appendChild(optionColor);
    optionColor.textContent = allColors[i];
}

let tedColor = document.getElementById("selectColor");

tedColor.addEventListener("change", function () {
     
    console.log(this.value);
})                                               
// CREATION DU BOUTON D'AJOUT DES PRODUITS AU PANIER

    let buttonCard = document.createElement("button");
    cardDiv.appendChild(buttonCard);
    buttonCard.classList.add("addToCart", "btn", "btn-dark", "btn-block", "mt-5");
    buttonCard.setAttribute("type", "button");
    buttonCard.textContent = "Ajouter au panier"; 


    let addCart = document.querySelector("button");
    addCart.addEventListener("click", function(e) {
    let infoBear = [myTeddy.name, myTeddy._id, myTeddy.price/10, tedColor.value];
    
   let addTeddy = localStorage.getItem(myTeddy);
    if(addTeddy) {
        inCart = JSON.parse(addTeddy);
        inCart.push(infoBear);
        localStorage.setItem("selectedBear",JSON.stringify(infoBear));
    } else {
        inCart = [];
        inCart.push(myTeddy, JSON.stringify(inCart));
        localStorage.setItem("selectedBear",JSON.stringify(infoBear));
    }
})
//ECOUTE DE L'EVENEMENT AU CLIC DU BOUTON ARTICLE AJOUTE      
      
    buttonCard.onclick = function (event) {
        
        alert("Article ajouté au panier !")
        event.preventDefault();
    };
}

let teddies;
// RECUPERATION DE L'URL AVEC ID
const getOneTeddy = async function () {
    let response = await fetch("http://localhost:3000/api/teddies/"+ idTeddy)
        if (response.ok) {
            let teddies = await response.json();
               createCard(teddies);
              
        } else {
        console.error("Error", response.status)
    }
}
// APPEL DE LA FONCTION API
getOneTeddy()