// CREATION DE 5 CARDS POUR CHAQUE OURSON
function createCard(teddies) {

// UNE BOUCLE FOR POUR ITERER 5 CARDS PRINCIPALES

    for(let i = 0; i < teddies.length; i++) {
        
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("d-flex","justify-content-around","col-xs-4", "card-mb-4", "card-body","bg-info", "rounded", "w-md-50","mx-auto", "xs-3", "sm-3", "mb-3","flex-column");
        let div = document.getElementById("card");
        div.appendChild(cardDiv);

// STRUCTURE HTML DES CARDS

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

// CREATION DU BOUTON LIEN VERS PAGE PRODUIT UNIQUE    

    let buttonCard = document.createElement("button");
    cardDiv.appendChild(buttonCard);
    buttonCard.classList.add("btn", "btn-dark", "mt-auto", "mb-auto");
    buttonCard.setAttribute("type", "button");
    buttonCard.textContent = "En savoir plus"; 
    
//IMPLEMENTATION D'UNE FONCTION DE RECUPERATION DE L'URL PAGE PRODUIT     

    function url() {

//récupération de l'id de chaque ourson
        let getUrl = "?id=" + teddies[i]._id; 
//redirection vers la page de produit unique
        window.location.href = "./frontend/product.html" + getUrl;
       }
    
//ECOUTE DE L'EVENEMENT AU CLIC DU BOUTON      

//on recupére le bouton dans le DOM
document.querySelector("button");  
    buttonCard.addEventListener("click", url);
    }

}     
   
let teddies;
// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE
const getAllTeddies = async function () {
    try {
    let response = await fetch("http://localhost:3000/api/teddies", {
    mode: "cors"
})
        if (response.ok) {
            let teddies = await response.json();
                createCard(teddies);
        } else {
        console.error("Error", response.status)
    }
} catch (e) {
    console.log(e);
}
};

// REACH API FUNCTION
getAllTeddies()