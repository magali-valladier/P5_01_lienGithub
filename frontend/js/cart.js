let recap = document.createElement("h4");
let h4 = document.getElementsByClassName("cart");
recap.classList.add("bg-dark", "text-white");
cart.appendChild(recap);
recap.textContent = "Récapitulatif : ";



// RECUPERATION DE L'API AVEC FETCH ASYNCHRONE
async function getCard() {
    let response = await fetch("http://localhost:3000/api/teddies")
        if (response.ok) {
                let teddies = await response.json();
                console.log(teddies);
        } else {
        console.error("Error", response.status)
    }
}

// REACH API FUNCTION
getCard()
