// CREATION DES 5 CARDS TEDDIES

for (let i = 0; i < 5; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let div = document.getElementById("card");
    div.appendChild(cardDiv);
}

// INSERTION IMG DANS CARD BODY
    function Ours(colors,id,name,price,img) {
        this.colors = colors;
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }
    const ours1 = new Ours(["Tan","Chocolate","Black","White"], "_id:5be9c8541c9d440000665243", "Norbert", 2900, "http://localhost:3000/images/teddy_1.jpg");
let ours = document.getElementsByClassName("card");




// API REQUEST


fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(data => {
    console.log(data) 
})
.catch(error => console.error(error))
