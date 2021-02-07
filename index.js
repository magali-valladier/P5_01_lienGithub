// CREATION DES 5 CARDS TEDDIES

for (let i = 0; i < 5; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-body", "mx-auto", "bg-info");
    let div = document.getElementById("card");
    div.appendChild(cardDiv);


// INSERTION IMG DANS CARD BODY
    function Ours(colors,id,name,price,imageUrl) {
        this.colors = colors;
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    let bears = [];
    const ours1 = new Ours(["Tan","Chocolate","Black","White"], "_id:5be9c8541c9d440000665243", "Norbert", 2900, "http://localhost:3000/images/teddy_1.jpg");
    const ours2 = new Ours(["Pale brown","Dark brown","White"], "_id:5beaa8bf1c9d440000a57d94", "Arnold", 3900, "http://localhost:3000/images/teddy_2.jpg");
    const ours3 = new Ours(["Brown"], "_id:5beaaa8f1c9d440000a57d95", "Lenny and Carl", 5900, "http://localhost:3000/images/teddy_3.jpg");
    const ours4 = new Ours(["Brown","Blue","Pink"], "_id:5beaabe91c9d440000a57d96", "Gustav", 4500, "http://localhost:3000/images/teddy_4.jpg");
    const ours5 = new Ours(["Beige","Tan","Chocolate"], "_id:5beaacd41c9d440000a57d97", "Garfunkel", 5500, "http://localhost:3000/images/teddy_5.jpg");
    bears.push(ours1,ours2,ours3,ours4,ours5);

    let imgCard = document.createElement("img");
    cardDiv.appendChild(imgCard);
    imgCard.classList.add("card-image-top", "rounded-circle", "w-25", "img-fluid");
    imgCard.src = bears[i].imageUrl;

    let titleCard = document.createElement("h3");
    cardDiv.appendChild(titleCard);
    titleCard.classList.add("card-title", "title");
    titleCard.textContent = bears[i].name;

    let priceCard = document.createElement("p");
    cardDiv.appendChild(priceCard);
    priceCard.classList.add("card-text");
    priceCard.textContent = bears[i].price;
}
// API REQUEST


fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(data => {
    console.log(data) 
})
.catch(error => console.error(error))
