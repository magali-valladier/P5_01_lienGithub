
//STRUCTURE HTML DU PANIER
function addCart(infobear) {

    let retrievedData = localStorage.getItem("selectedBear");
let infoBear2 = JSON.parse(retrievedData);


    let cartInfo = document.createElement("div");
    cartInfo.classList.add("cartInfo", "bg-info");
    document.getElementById("cart");
    cart.appendChild(cartInfo);

    let recap = document.createElement("h4");
    document.getElementById("cartInfo");
    recap.classList.add("bg-dark", "text-white");
    cartInfo.appendChild(recap);
    recap.textContent = "Récapitulatif : ";

    let name = document.createElement("p");
    name.innerHTML = infoBear2[0];
    cartInfo.appendChild(name);

    let color = document.createElement("p");
    color.innerHTML = infoBear2[3];
    cartInfo.appendChild(color);

    let price = document.createElement("p");
    price.innerHTML = infoBear2[2] + "€";
    cartInfo.appendChild(price);

    let quantity = document.createElement("p");
    cartInfo.appendChild(quantity);
    quantity.textContent = "Quantité : ";

    let qty = document.createElement("select");
    qty.setAttribute("id", "select");
    cartInfo.appendChild(qty);

    for(let i = 1; i < 5; i++){

        let optionQty = document.createElement("option");
        optionQty.setAttribute("value", i);
        select.appendChild(optionQty);
        optionQty.textContent = i;
    }

    let tedQty = document.getElementById("select");

    tedQty.addEventListener("change", function () {

        result = this.value;
          console.log(result);

       }); 

    let priceTitle = document.createElement("p");
    cartInfo.appendChild(priceTitle);
    priceTitle.textContent = "Prix total : ";

    let totalPrice = document.createElement("p");
    cartInfo.appendChild(totalPrice);
    totalPrice.innerHTML = infoBear2[2] + "€";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Supprimer";
    deleteBtn.setAttribute("data-id", infoBear2[2]);
    cartInfo.appendChild(deleteBtn);
}

addCart()

// CREATION DU FORMULAIRE DE COMMANDE

let formDiv = document.createElement("div");
formDiv.classList.add("bg-info");
cart.appendChild(formDiv);
let infoForm = document.createElement("h4");
document.getElementsByTagName("form");
infoForm.classList.add("bg-dark", "text-white");
formDiv.appendChild(infoForm);
infoForm.textContent = "Remplissez le formulaire pour valider votre commande : ";
let newForm = document.createElement("form");
document.getElementById("cart");
formDiv.appendChild(newForm);
newForm.setAttribute("method", "post");

let formGroup = document.createElement("div");
formGroup.classList.add("form-group", "d-flex", "justify-content-center");
document.getElementsByTagName("form");
newForm.appendChild(formGroup);

let labelName = document.createElement("label");
labelName.setAttribute("for", "name");
labelName.textContent = "Votre nom";
let inputName = document.createElement("input");
inputName.setAttribute("name", "name");
inputName.setAttribute("type", "text");
inputName.classList.add("required");
let span = document.createElement("span");
span.id = "missingName";
formGroup.appendChild(span);

let formGroup2 = document.createElement("div");
formGroup2.classList.add("form-group", "d-flex", "justify-content-center");
document.getElementsByTagName("form");
newForm.appendChild(formGroup2);
let labelMail = document.createElement("label");
labelMail.setAttribute("for", "mail");
labelMail.textContent = "Votre email :";
let inputMail = document.createElement("input");
inputMail.setAttribute("name", "mail");
inputMail.classList.add("required");
inputMail.setAttribute("type", "mail");
let erreur = document.createElement("span");
erreur.classList.add("error");
document.getElementsByClassName("error").innerHTML = "Merci de saisir un email valide";

let formGroup3 = document.createElement("div");
formGroup3.classList.add("form-group", "d-flex", "justify-content-center");
document.getElementsByTagName("form");
newForm.appendChild(formGroup3);
let labelAddress = document.createElement("label");
labelAddress.setAttribute("for", "address");
let inputAddress = document.createElement("input");
inputAddress.setAttribute("name", "address");
inputAddress.setAttribute("type", "text");
labelAddress.textContent = "N° de rue / avenue ...";
inputAddress.classList.add("required");

let labelCity = document.createElement("label");
labelCity.setAttribute("for", "city");
let inputCity = document.createElement("input");
inputCity.setAttribute("name", "city");
inputCity.setAttribute("type", "text");
labelCity.textContent = "Ville";
inputCity.classList.add("required");

let labelCode = document.createElement("label");
labelCode.setAttribute("for", "zipcode");
let inputCode = document.createElement("input");
inputCode.setAttribute("name","zipcode");
inputCode.setAttribute("type", "text");
labelCode.textContent = "Code postal";
inputCode.classList.add("required");

function zip(){
    let zipCode = document.getElementsByTagName('input')[5].value;
    let regex = /^(?:[0-8]\\d|9[0-8])\\d{3}$/;
    if(regex.zipCode == false){
    alert("Merci de sasir un code postal valide");
    return false;
    }
    if(zipCode == " "){
    alert("Champ manquant");
    return false;
    }
    return true;
    }

let buttonForm = document.createElement("button");
    buttonForm.id = "submitBtn";
    newForm.appendChild(buttonForm);
    buttonForm.classList.add("btn", "btn-success", "btn-block");
    buttonForm.setAttribute("type", "submit");
    buttonForm.textContent = "Valider ma commande"; 
    
// pensez a prevent default pour empecher l'envoi de la page
formGroup.appendChild(labelName);
formGroup.appendChild(inputName);
formGroup2.appendChild(labelMail);
formGroup2.appendChild(inputMail);
formGroup2.appendChild(erreur);
formGroup3.appendChild(labelAddress);
formGroup3.appendChild(inputAddress);
formGroup3.appendChild(labelCity);
formGroup3.appendChild(inputCity);
formGroup3.appendChild(labelCode);
formGroup3.appendChild(inputCode);

// VERIFICATION DE LA VALIDATION DES DONNES DU FORMULAIRE

let goodForm = document.getElementById("submitBtn");
let nom = document.getElementsByName("name");
let missingName = document.getElementById("missingName");
let okName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

goodForm.addEventListener("click", validation);

function validation(event) {
    if (nom.validity.valueMissing) {
        event.preventDefault();
        missingName.textContent = "Renseignez ce champ";
        missingName.style.color = "red";
    } else if (okName.test(nom.value) == false) {
        event.preventDefault();
        missingName.textContent = "Renseignez un prénom";
    } else {
        
    }
}
let contact = {
name: inputName.value,
address: inputAddress.value,
city: inputCity.value,
zip: inputCode.value,
mail: inputMail.value,
}
// FONCTION POST POUR ENVOI FORMULAIRE

const sendForm = async function () {
    let response = await fetch("http://localhost:3000/api/teddies/order", {
        method: "post",
        
        headers: {
            "content-type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({contact, infoBear})
    })
    
        if (response.ok) {
            window.location.href = "confirm.html";
        } else {
            console.error (response.status);
        }
   };

let teddies;
// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE
const getAllTeddies = async function () {
    let response = await fetch("http://localhost:3000/api/teddies")
        if (response.ok) {
            let teddies = await response.json();
               
        } else {
        console.error("Error", response.status)
    }
}

// REACH API FUNCTION
getAllTeddies()
