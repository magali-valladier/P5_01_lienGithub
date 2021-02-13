let recap = document.createElement("h4");
let h4 = document.getElementsByClassName("cart");
recap.classList.add("bg-dark", "text-white");
cart.appendChild(recap);
recap.textContent = "Récapitulatif : ";

function addCart (idTeddy){

    let cart = JSON.parse(localStorage.getItem("idTeddy.name"));
    let td = getElementsByClassName("bear");
    td.textContent.innerHTML = cart;


}
