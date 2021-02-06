// CREATION DES 5 CARDS TEDDIES

for (let i = 0; i < 5; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let div = document.getElementById("card");
    div.appendChild(cardDiv);

// INSERTION IMG DANS CARD BODY

    let imgBody = document.createElement("img");
    cardDiv.appendChild(imgBody);
    

}

// API REQUEST
let bears;

const fetchTeddies = async() => {

bears = await fetch("http://localhost:3000/api/teddies")
.then(response => response.json());
console.log(bears);
};
fetchTeddies();