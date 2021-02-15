//STRUCTURE HTML DU PANIER

let recap = document.createElement("h4");
document.getElementById("cart");
recap.classList.add("bg-dark", "text-white");
cart.appendChild(recap);
recap.textContent = "Récapitulatif : ";

// CREATION D'UNE FONCTION POUR REMPLIR LE TABLEAU AVEC LE PRODUIT SELECTIONNE

let productName = localStorage.getItem("name");  
document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[0].innerHTML = productName;
let productPrice = localStorage.getItem("price");  
document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[1].innerHTML = productPrice + "€";
let total = localStorage.getItem("price");  
document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[2].innerHTML = total + "€";
document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[3].innerHTML = total + "€";


    
// CREATION DU FORMULAIRE DE COMMANDE

let formDiv = document.createElement("div");
formDiv.classList.add("bg-info");
table.appendChild(formDiv);
let infoForm = document.createElement("h4");
document.getElementsByTagName("form");
infoForm.classList.add("bg-dark", "text-white");
formDiv.appendChild(infoForm);
infoForm.textContent = "Remplissez le formulaire pour valider votre commande : ";
let newForm = document.createElement("form", "d-block");
document.getElementById("cart");
formDiv.appendChild(newForm);
newForm.setAttribute("method", "post");

let formGroup = document.createElement("div");
formGroup.classList.add("form-group");
document.getElementsByTagName("form");
newForm.appendChild(formGroup);

let labelName = document.createElement("label");
labelName.setAttribute("for", "name");
labelName.textContent = "Votre nom";
let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.classList.add("required");

let formGroup2 = document.createElement("div");
formGroup2.classList.add("form-group");
document.getElementsByTagName("form");
newForm.appendChild(formGroup2);
let labelMail = document.createElement("label");
labelMail.setAttribute("for", "mail");
labelMail.textContent = "Votre email";
let inputMail = document.createElement("input");
inputMail.classList.add("required");
inputMail.setAttribute("type", "mail");

let formGroup3 = document.createElement("div");
formGroup3.classList.add("form-group");
document.getElementsByTagName("form");
newForm.appendChild(formGroup3);
let labelAddress = document.createElement("label");
labelAddress.setAttribute("for", "address");
let inputAddress = document.createElement("input");
inputAddress.setAttribute("type", "text");
labelAddress.textContent = "N° de rue / avenue ...";
inputAddress.classList.add("required");

let labelCity = document.createElement("label");
labelCity.setAttribute("for", "city");
let inputCity = document.createElement("input");
inputCity.setAttribute("type", "text");
labelCity.textContent = "Ville";
inputCity.classList.add("required");

let labelCode = document.createElement("label");
labelCode.setAttribute("for", "zipcode");
let inputCode = document.createElement("input");
inputCode.setAttribute("type", "text");
labelCode.textContent = "Code postal";
inputCode.classList.add("required");

let buttonForm = document.createElement("button");
    newForm.appendChild(buttonForm);
    buttonForm.classList.add("btn", "btn-success");
    buttonForm.setAttribute("type", "button");
    buttonForm.textContent = "Valider ma commande"; 
    

formGroup.appendChild(labelName);
formGroup.appendChild(inputName);
formGroup2.appendChild(labelMail);
formGroup2.appendChild(inputMail);
formGroup3.appendChild(labelAddress);
formGroup3.appendChild(inputAddress);
formGroup3.appendChild(labelCity);
formGroup3.appendChild(inputCity);
formGroup3.appendChild(labelCode);
formGroup3.appendChild(inputCode);

   
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
