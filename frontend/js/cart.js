let retrievedData = localStorage.getItem("allCart");
let myCart = JSON.parse(retrievedData);

//STRUCTURE HTML DU PANIER
function addCart() {

for (let i = 0; i < myCart.length; i++) {


    let cartInfo = document.createElement("div");
    cartInfo.classList.add("cartInfo", "bg-info");
    document.getElementById("cart");
    cart.appendChild(cartInfo);

    let recap = document.createElement("h4");
    document.getElementById("cartInfo");
    recap.classList.add("bg-dark","text-center", "text-white");
    cartInfo.appendChild(recap);
    recap.textContent = "Récapitulatif : ";

    let name = document.createElement("p");
    name.innerHTML = "Nom de l'article : " + myCart[i].name;
    cartInfo.appendChild(name);

    let color = document.createElement("p");
    color.innerHTML = "Couleur l'article : " + myCart[i].colors;
    cartInfo.appendChild(color);

    let price = document.createElement("p");
    price.innerHTML = "Prix unitaire : " + myCart[i].price +"€";
    cartInfo.appendChild(price);

    let quantity = document.createElement("p");
    cartInfo.appendChild(quantity);
    quantity.textContent = "Quantité : ";

    let qty = document.createElement("select");
    qty.setAttribute("id", "select");
    cartInfo.appendChild(qty);

    for(let j = 1; j < 5; j++){

        let optionQty = document.createElement("option");
        optionQty.setAttribute("value", j);
        qty.appendChild(optionQty);
        optionQty.textContent = j;
    }

// CREATION D'UNE FONCTION D'ECOUTE DU CHANGEMENT DE LA QUANTITE POUR CALCUL PRIX TOTAL
    let tedQty = document.getElementById("select");

    tedQty.addEventListener("change", function choice () {

        let ttcPrice = this.value;
        document.getElementsByClassName("totalPrice");
        let ttc = myCart[i].price * ttcPrice + "€";
        totalPrice.innerHTML = myCart[i].price * ttcPrice + "€";
        localStorage.setItem("price", ttc);  
       }); 
      
    
    let priceTitle = document.createElement("p");
    cartInfo.appendChild(priceTitle);
    priceTitle.textContent = "Prix total : ";

    let totalPrice = document.createElement("p");
    totalPrice.classList.add("totalPrice");
    cartInfo.appendChild(totalPrice);
    
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn", "btn", "btn-dark", "mb-3");
    deleteBtn.innerHTML = "Supprimer";
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
    localStorage.removeItem(myCart[i]);
    localStorage.getItem(myCart[i]);
    
};
}
}
addCart()

// CREATION DU FORMULAIRE DE COMMANDE

let formDiv = document.createElement("div");
formDiv.classList.add("bg-info");
cart.appendChild(formDiv);
let infoForm = document.createElement("h4");
document.getElementsByTagName("form");
infoForm.classList.add("bg-dark","text-center", "text-white", "mb-3");
formDiv.appendChild(infoForm);
infoForm.textContent = "Remplissez le formulaire pour valider votre commande : ";
let newForm = document.createElement("form");
newForm.id = "form";
document.getElementById("cart");
formDiv.appendChild(newForm);
newForm.setAttribute("method", "post");
newForm.setAttribute("action", "confirm.html");

let formGroup = document.createElement("div");
formGroup.classList.add("form-group", "d-flex", "justify-content-center","col-md-6");
document.getElementsByTagName("form");
newForm.appendChild(formGroup);
let formRow1 = document.createElement("div");
formRow1.classList.add("form-row");
formGroup.appendChild(formRow1);
let labelName = document.createElement("label");
labelName.setAttribute("for", "firstName");
labelName.classList.add("form-label");
labelName.textContent = "Votre prénom";
let inputName = document.createElement("input");
inputName.setAttribute("name", "firstName");
inputName.setAttribute("type", "text");
inputName.setAttribute("required", "required");
inputName.classList.add("form-control");


let labelName1 = document.createElement("label");
labelName1.setAttribute("for", "lastName");
labelName1.classList.add("form-label");
labelName1.textContent = "Votre nom";

let inputName1 = document.createElement("input");
inputName1.setAttribute("name", "lastName");
inputName1.setAttribute("type", "text");
inputName1.setAttribute("required", "required");
inputName1.classList.add("form-control");

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
inputMail.setAttribute("required", "required");
inputMail.classList.add("form-control");
inputMail.setAttribute("type", "email");

let formGroup3 = document.createElement("div");
formGroup3.classList.add("form-group","d-flex", "justify-content-center", "col-md-6");
document.getElementsByTagName("form");
newForm.appendChild(formGroup3);
let formRow = document.createElement("div");
formRow.classList.add("form-row");
formGroup3.appendChild(formRow);
let labelAddress = document.createElement("label");
labelAddress.textContent = "N° / voie ";
labelAddress.setAttribute("for", "address");
labelAddress.classList.add("form-label");
let inputAddress = document.createElement("input");
inputAddress.setAttribute("name", "address");
inputAddress.setAttribute("type", "text");
inputAddress.setAttribute("required", "required");
inputAddress.classList.add("form-control");

let labelCity = document.createElement("label");
labelCity.setAttribute("for", "city");
labelCity.classList.add("form-label");
let inputCity = document.createElement("input");
inputCity.setAttribute("name", "city");
inputCity.setAttribute("type", "text");
inputCity.setAttribute("required", "required");
labelCity.textContent = "Ville";
inputCity.classList.add("form-control");

let labelCode = document.createElement("label");
labelCode.setAttribute("for", "zipcode");
labelCode.classList.add("form-label");
let inputCode = document.createElement("input");
inputCode.setAttribute("name","zipcode");
inputCode.setAttribute("type", "text");
inputCode.setAttribute("required", "required");
labelCode.textContent = "Code postal";
inputCode.classList.add("form-control");

formGroup.appendChild(labelName);
formGroup.appendChild(inputName);
formGroup.appendChild(labelName1);
formGroup.appendChild(inputName1);
formGroup2.appendChild(labelMail);
formGroup2.appendChild(inputMail);
formRow.appendChild(labelAddress);
formRow.appendChild(inputAddress);
formRow.appendChild(labelCity);
formRow.appendChild(inputCity);
formRow.appendChild(labelCode);
formRow.appendChild(inputCode);


// CREATION DU BOUTON DE VALIDATION DU FORMULAIRE

let buttonForm = document.createElement("button");
    buttonForm.id = "submitBtn";
    newForm.appendChild(buttonForm);
    buttonForm.classList.add("btn", "btn-success", "btn-block");
    buttonForm.setAttribute("type", "submit");
    buttonForm.textContent = "Valider ma commande"; 
  
// CREATION ET RECUPERATION DES DONNEES POUR ENVOI FORMULAIRE

// objet contact
let contact = {
    firstName:  inputName.value,
    lastName:  inputName1.value,
    address:  inputAddress.value,
    email:  inputMail.value,
    city:  inputCity.value,
 };

localStorage.setItem("contact", JSON.stringify(contact));

// tableau des produits

  let products = [];
for (let i = 0; i< myCart.length; i++) {
    products.push(myCart[i]._id);
    
}
  // creation de variable recapitulative des donnees à envoyer
  let orderData = {contact, products};
  console.log(contact);
  console.log(products);

// CREATION D'UNE FONCTION DE VALIDATION DU FORMULAIRE AVANT ENVOI
function checkData() {
    
    let checkName = /[a-zA-Z]/;
    let checkMail = /.+@.+\..+/;
    let checkAddress = /[0-9] [a-zA-Z]/;
  
    if (checkName.test(firstName, lastName, city), checkMail.test(email), checkAddress.test(address) == false) {
      alert("Erreur lors de la saisie des champs");
      return false;
    } else {
      return true;
    }
  }

  let sendingForm = document.getElementById("submitBtn");

sendingForm.addEventListener("click",() => {

// FONCTION POST POUR ENVOI FORMULAIRE

async function sendForm () {
    try {
    let response = await fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(orderData), 
       
    })
       if (response.ok) {
           
            window.location.href = "confirm.html";
            localStorage.setItem("data", orderData);
           console.log(response);
    } else {
            console.error (response.status);
        }
   } catch (e) {
       console.log(e);
   }
  };

})
