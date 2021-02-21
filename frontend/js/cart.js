
//STRUCTURE HTML DU PANIER
function addCart() {

   
    let retrievedData = localStorage.getItem("selectedBear");
let infoBear2 = JSON.parse(retrievedData);
let colorTed = localStorage.getItem("tedColor");

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
    color.innerHTML = colorTed;
    cartInfo.appendChild(color);

    let price = document.createElement("p");
    price.innerHTML = infoBear2[2] +"€";
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

// CREATION D'UNE FONCTION D'ECOUTE DU CHANGEMENT DE LA QUANTITE POUR CALCUL PRIX TOTAL
    let tedQty = document.getElementById("select");

    tedQty.addEventListener("change", function choice () {

        let ttcPrice = this.value;
        document.getElementsByClassName("totalPrice");
        totalPrice.innerHTML = infoBear2[2] * ttcPrice + "€";
        price.innerHTML = "0€";
        localStorage.setItem("price", ttcPrice);  
       }); 
      
    
    let priceTitle = document.createElement("p");
    cartInfo.appendChild(priceTitle);
    priceTitle.textContent = "Prix total : ";

    let totalPrice = document.createElement("p");
    totalPrice.classList.add("totalPrice");
    cartInfo.appendChild(totalPrice);
    totalPrice.innerHTML = infoBear2[2] +  "€";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn", "btn", "btn-dark");
    deleteBtn.innerHTML = "Vider mon panier";
    cartInfo.appendChild(deleteBtn);

//CREATION DU BOUTON SUPPRIMER MON PANIER

document.getElementsByClassName("deleteBtn");
deleteBtn.onclick = function (event) {
    event.preventDefault();
    totalPrice.innerHTML = "0€";
    price.innerHTML = "0€";
    color.innerHTML = "No product";
    name.innerHTML = "No product";
    alert("Votre panier est vide !");
};
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
newForm.id = "form";
document.getElementById("cart");
formDiv.appendChild(newForm);
newForm.setAttribute("method", "post");
newForm.classList.add("needs-validation");

let formGroup = document.createElement("div");
formGroup.classList.add("form-group", "d-flex", "justify-content-center","col-md-6");
document.getElementsByTagName("form");
newForm.appendChild(formGroup);

let labelName = document.createElement("label");
labelName.setAttribute("for", "name");
labelName.classList.add("form-label");
labelName.textContent = "Votre nom";
let inputName = document.createElement("input");
inputName.setAttribute("name", "name");
inputName.setAttribute("type", "text");
inputName.classList.add("required", "form-control");
let span = document.createElement("span");
span.id = "missingName";
formGroup.appendChild(span);

let formGroup2 = document.createElement("div");
formGroup2.classList.add("form-group", "d-flex", "justify-content-center","col-md-6");
document.getElementsByTagName("form");
newForm.appendChild(formGroup2);
let labelMail = document.createElement("label");
labelMail.setAttribute("for", "mail");
labelMail.classList.add("form-label");
labelMail.textContent = "Votre email ";
let inputMail = document.createElement("input");
inputMail.setAttribute("name", "mail");
inputMail.classList.add("required", "form-control");
inputMail.setAttribute("type", "mail");
let erreur = document.createElement("span");
erreur.classList.add("error");
document.getElementsByClassName("error").innerHTML = "Merci de saisir un email valide";

let formGroup3 = document.createElement("div");
formGroup3.classList.add("form-group","d-flex", "justify-content-center", "col-md-6");
document.getElementsByTagName("form");
newForm.appendChild(formGroup3);
let formRow = document.createElement("div");
formRow.classList.add("form-row");
formGroup3.appendChild(formRow);
let labelAddress = document.createElement("label");
labelAddress.setAttribute("for", "address");
labelAddress.classList.add("form-label");
let inputAddress = document.createElement("input");
inputAddress.setAttribute("name", "address");
inputAddress.setAttribute("type", "text");
labelAddress.textContent = "N° de rue / avenue ...";
inputAddress.classList.add("required", "form-control");

let labelCity = document.createElement("label");
labelCity.setAttribute("for", "city");
labelCity.classList.add("form-label");
let inputCity = document.createElement("input");
inputCity.setAttribute("name", "city");
inputCity.setAttribute("type", "text");
labelCity.textContent = "Ville";
inputCity.classList.add("required", "form-control");

let labelCode = document.createElement("label");
labelCode.setAttribute("for", "zipcode");
labelCode.classList.add("form-label");
let inputCode = document.createElement("input");
inputCode.setAttribute("name","zipcode");
inputCode.setAttribute("type", "text");
labelCode.textContent = "Code postal";
inputCode.classList.add("required", "form-control");

formGroup.appendChild(labelName);
formGroup.appendChild(inputName);
formGroup2.appendChild(labelMail);
formGroup2.appendChild(inputMail);
formGroup2.appendChild(erreur);
formRow.appendChild(labelAddress);
formRow.appendChild(inputAddress);
formRow.appendChild(labelCity);
formRow.appendChild(inputCity);
formRow.appendChild(labelCode);
formRow.appendChild(inputCode);

let buttonForm = document.createElement("button");
    buttonForm.id = "submitBtn";
    newForm.appendChild(buttonForm);
    buttonForm.classList.add("btn", "btn-success", "btn-block");
    buttonForm.setAttribute("type", "button");
    buttonForm.textContent = "Valider ma commande"; 
    
// CREATION DE L'OBJECT CONTACT POUR ENVOI DONNEES FORMULAIRE

    const contact = {
        allName: inputName.value,
        mail: inputMail.value,
        address: inputAddress.value,
        city: inputCity.value,
        zip: inputCode.value,        
    }
   
   
// VERIFICATION DE LA VALIDATION DES DONNES DU FORMULAIRE

let goodForm = document.getElementById("submitBtn");
let nom = document.getElementsByName("name");
let missingName = document.getElementById("missingName");
let okName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

function zip(){
    let zipCode = document.getElementsByTagName('input')[5];
    let regex = /^(?:[0-8]\\d|9[0-8])\\d{3}$/;
    if(regex.zipCode == false){
    alert("Merci de saisir un code postal valide");
    return false;
    } else if(zipCode == " "){
    alert("Champ manquant");
    return false;
    } else {
    return true;
    }
}
    function mel(){
        let mail = document.getElementsByTagName('input')[2].value;
        let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if(regex.mail == false){
        alert("Merci de saisir un email valide");
        return false;
        } else if(mel == " "){
        alert("Champ manquant");
        return false;
        } else {
        return true;
        }
    }

goodForm.addEventListener("click",function (zip, mel,){
    window.location.href = "confirm.html";
});

// FONCTION POST POUR ENVOI FORMULAIRE

const sendForm = async function (contact, infoBear) {
    let response = await fetch("http://localhost:3000/api/teddies/order", {
        method: "post",
        
        headers: {
            "content-type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(contact, infoBear),
    });
    
        if (response.ok) {
            window.location.href = "confirm.html";
        } else {
            console.error (response.status);
        }
   };


// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE

let teddies;
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
