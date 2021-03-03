let retrievedData = localStorage.getItem("allCart");
let myCart = JSON.parse(retrievedData);
let data = localStorage.getItem("price");
let total = JSON.parse(data);

console.log(myCart);
console.log(total);
 
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

for(let i = 0; i < myCart.length; i++) {
let pInfo = document.createElement("p");
confirm.appendChild(pInfo);
pInfo.textContent = myCart[i]._id;

}
let p2 = document.createElement("p");
document.createElement("p");
div.appendChild(p2);

let tot=0;
for (let i=0; i < total.length; i++) {
tot = tot + total[i];
parsed = parseInt(tot);
}
console.log(parsed);
p2.textContent = " Prix total de votre commande :" + parsed + "€";

// CREATION D'UNE FONCTION POUR CREER NOMBRE ALEATOIRE DE COMMANDE
let p3 = document.createElement("p");
document.createElement("p");
div.appendChild(p3);
let min = 1;
let max = 100000000;
let random = Math.floor(Math.random() * (max - min)) + min;
p3.textContent = " Identifiant de  commande à conserver : " + random ;


// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE
async function sendForm (orderData) {
    try {
    let response = await fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(orderData), 
       
    });
       if (response.ok) {
            window.location.href = "confirm.html";
           console.log(response);
    } else {
            console.error (response.status);
        }
   } catch (e) {
       console.log(e);
   }
};