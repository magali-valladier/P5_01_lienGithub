// CREATION DE 5 CARDS POUR CHAQUE OURSON

function createCard(teddies) {
// UNE BOUCLE FOR POUR ITERER 5 CARDS PRINCIPALES

    for(let i = 0; i < teddies.length; i++) {
        
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card-deck", "card-mb-4", "card-body","bg-info", "rounded", "w-md-50", "w-sm-75","mx-auto", "xs-3", "sm-3", "mb-3");
        let div = document.getElementById("card");
        div.appendChild(cardDiv);

// 5 ITERATIONS DE CREATION DES ELEMENTS DES CARDS

    let imgCard = document.createElement("img");
    cardDiv.appendChild(imgCard);
    imgCard.classList.add("card-image-top","img-fluid", "w-25");
    imgCard.src = teddies[i].imageUrl;

    let titleCard = document.createElement("h3");
    cardDiv.appendChild(titleCard);
    titleCard.classList.add("container", "card-title", "title", "mt-auto", "mb-auto", "pl-50");
    titleCard.textContent = teddies[i].name;

    let priceCard = document.createElement("p");
    cardDiv.appendChild(priceCard);
    priceCard.classList.add("container", "card-text", "mt-auto", "mb-auto");
    priceCard.textContent = (teddies[i].price/10) + "€";

// CREATION DU BOUTON LIEN VERS PAGE PRODUIT SIMPLE    

    let buttonCard = document.createElement("button");
    cardDiv.appendChild(buttonCard);
    buttonCard.classList.add("btn", "btn-dark", "mt-auto", "mb-auto");
    buttonCard.setAttribute("type", "button");
    buttonCard.textContent = "En savoir plus"; 
    document.querySelector("button");

//IMPLEMENTATION D'UNE FONCTION DE RECUPERATION DE L'URL PAGE PRODUIT     

    function url() {
        
        let getUrl = "?id=" + teddies[i]._id; 
        window.location.href = "./frontend/product.html" + getUrl;
       }
       console.log(url);

//ECOUTE DE L'EVENEMENT AU CLIC DU BOUTON       
      
    buttonCard.addEventListener("click", url);
    }
}
      
   
let teddies;
// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE
const getAllTeddies = async function () {
    let response = await fetch("http://localhost:3000/api/teddies", {
    mode: "cors"
})
        if (response.ok) {
            let teddies = await response.json();
                createCard(teddies);
        } else {
        console.error("Error", response.status)
    }
}

// REACH API FUNCTION
getAllTeddies()
