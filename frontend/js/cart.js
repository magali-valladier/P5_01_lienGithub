//STRUCTURE HTML DU PANIER

let recap = document.createElement("h4");
document.getElementById("cart");
recap.classList.add("bg-dark", "text-white");
cart.appendChild(recap);
recap.textContent = "Récapitulatif : ";

// POUR REMPLIR LE TABLEAU AVEC LE PRODUIT SELECTIONNE

let retrievedData = localStorage.getItem("selectedBear");
let infoBear2 = JSON.parse(retrievedData);
document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[0].innerHTML = infoBear2[0];

document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[1].innerHTML = infoBear2[2] + "€";

document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[2].innerHTML = infoBear2[4];

document.getElementsByTagName('table')[0].getElementsByTagName("tr")[1].cells[3].innerHTML = (infoBear2[4]*infoBear2[2]) + "€";



// inserer au fur et mesure les select dans les ligne table 


// CREATION DU FORMULAIRE DE COMMANDE

let formDiv = document.createElement("div");
formDiv.classList.add("bg-info");
table.appendChild(formDiv);
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
formGroup.classList.add("form-group");
document.getElementsByTagName("form");
newForm.appendChild(formGroup);

let labelName = document.createElement("label");
labelName.setAttribute("for", "name");
labelName.textContent = "Votre nom";
let inputName = document.createElement("input");
inputName.setAttribute("name", "name");
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
inputMail.setAttribute("name", "mail");
inputMail.classList.add("required");
inputMail.setAttribute("type", "mail");
let erreur = document.createElement("span");
erreur.classList.add("error");
document.getElementsByClassName("error").innerHTML = "Merci de saisir un email valide";

let formGroup3 = document.createElement("div");
formGroup3.classList.add("form-group");
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
    newForm.appendChild(buttonForm);
    buttonForm.classList.add("btn", "btn-success");
    buttonForm.setAttribute("type", "button");
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

function url() {
        
    let getUrl = "?" + "order"; 
    window.location.href = "confirm.html" + getUrl;
   }
   console.log(url);
   buttonForm.addEventListener("click", url);

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
