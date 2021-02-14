//STRUCTURE HTML DU PANIER

let recap = document.createElement("h4");
document.getElementById("cart");
recap.classList.add("bg-dark", "text-white");
cart.appendChild(recap);
recap.textContent = "Récapitulatif : ";

// CREATION D'UNE FONCTION POUR REMPLIR LE TABLEAU AVEC LE PRODUIT SELECTIONNE

localStorage.getItem("name");  
document.getElementsByClassName("bear").innerHTML = "name";  

    
// CREATION DU FORMULAIRE DE COMMANDE

let formDiv = document.createElement("div");
formDiv.classList.add("d-flex", "bg-info", "mx-auto", "justify-content-around");
table.appendChild(formDiv);
let newForm = document.createElement("form");
document.getElementById("cart");
formDiv.appendChild(newForm);
newForm.setAttribute("method", "post");

let labelName = document.createElement("label");
labelName.setAttribute("for", "name");
labelName.textContent = "Votre nom";
let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.classList.add("required");

let labelMail = document.createElement("label");
labelMail.setAttribute("for", "mail");
labelMail.textContent = "Votre email";
let inputMail = document.createElement("input");
inputMail.classList.add("required");
inputMail.setAttribute("type", "mail");

let labelAddress = document.createElement("label");
labelAddress.setAttribute("for", "address");
let inputAddress = document.createElement("input");
inputAddress.setAttribute("type", "text");
labelAddress.textContent = "N° de rue / avenue ...";
inputAddress.classList.add("required");
newForm.appendChild(labelName);
newForm.appendChild(inputName);
newForm.appendChild(labelMail);
newForm.appendChild(inputMail);
newForm.appendChild(labelAddress);
newForm.appendChild(inputAddress);

   
let teddies;
// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE
const getAllTeddies = async function () {
    let response = await fetch("http://localhost:3000/api/teddies")
        if (response.ok) {
            let teddies = await response.json();
                console.log(teddies);
        } else {
        console.error("Error", response.status)
    }
}

// REACH API FUNCTION
getAllTeddies()
