let retrievedData = localStorage.getItem("selectedBear");
let infoBear2 = JSON.parse(retrievedData);
let data = localStorage.getItem("price");
let total = JSON.parse(data);

console.log(data);

const div = document.createElement("div");
div.classList.add("bg-success");
let diiv = document.getElementById("confirm");
diiv.appendChild(div);
let p = document.createElement("p");
p.classList.add("text-center", "font-weight-bold");
div.appendChild(p);
p.textContent = " Nous vous remercions de votre confiance. Vous trouverez ci-joint le résumé de votre commande. Vous recevrez un email de confirmation dès l'envoi de votre commande !";

let confirm = document.createElement("div");
div.appendChild(confirm);
for(let i = 0; i < infoBear2.length; i++) {
let pInfo = document.createElement("p");
confirm.appendChild(pInfo);
let confirmInfo = infoBear2[i];
pInfo.textContent = confirmInfo;
}
let p2 = document.createElement("p");
document.createElement("p");
div.appendChild(p2);
p2.textContent = " Prix total de votre commande :" + infoBear2[2]*total + "€";
let p3 = document.createElement("p");
document.createElement("p");
div.appendChild(p3);

// CREATION D'UNE FONCTION POUR CREER NOMBRE ALEATOIRE DE COMMANDE

let min = 1;
let max = 100000000;
let random = Math.floor(Math.random() * (max - min)) + min;
p3.textContent = " Identifiant de  commande à conserver : " + random;


// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE
let teddies;
const getAllTeddies = async function () {
    let response = await fetch("http://localhost:3000/api/teddies/order", {
        mode: 'cors',
    })
        if (response.ok) {
            let teddies = await response.json();
                console.log(teddies);
        } else {
        console.error("Error", response.status)
    }
}


// REACH API FUNCTION
getAllTeddies()