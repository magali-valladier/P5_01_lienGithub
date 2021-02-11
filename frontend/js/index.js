// 5 CARDS CURL WITH FOR

function getTeddies(teddies) {

    for(let i = 0; i < teddies.length; i++) {
        
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card-body","bg-info", "rounded", "w-75", "mx-auto", "mb-3", "d-flex", "justify-content-around");
        let div = document.getElementById("card");
        div.appendChild(cardDiv);
            
        let imgCard = document.createElement("img");
        cardDiv.appendChild(imgCard);
        imgCard.classList.add("card-image-top", "rounded-circle", "w-25", "img-fluid");
        imgCard.src = teddies[i].imageUrl;
    
        let titleCard = document.createElement("h3");
        cardDiv.appendChild(titleCard);
        titleCard.classList.add("card-title", "title", "mt-auto", "mb-auto", "pl-50");
        titleCard.textContent = teddies[i].name;

        let priceCard = document.createElement("p");
        cardDiv.appendChild(priceCard);
        priceCard.classList.add("card-text", "mt-auto", "mb-auto");
        priceCard.textContent = (teddies[i].price/10) + "€";

        let buttonCard = document.createElement("button");
        cardDiv.appendChild(buttonCard);
        buttonCard.classList.add("btn", "btn-dark", "mt-auto", "mb-auto");
        buttonCard.setAttribute("type", "button");
        buttonCard.textContent = "En savoir plus"; 
        document.querySelector("button");

        function url() {
            
            let getUrl = "?id=" + teddies[i]._id; 
            window.location.href = "frontend/product.html" + getUrl;
           }
          
        buttonCard.addEventListener("click", url);
    }
}

let teddies;
// API REQUEST WITH ASYNC FUNCTION
const getAllTeddies = async function () {
    let response = await fetch("http://localhost:3000/api/teddies")
    if (response.ok) {
       teddies = await response.json();
            getTeddies(teddies);
    } else {
        console.error("Error", response.status)
    }
}

// REACH API FUNCTION
getAllTeddies()
