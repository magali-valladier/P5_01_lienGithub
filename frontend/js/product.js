

function getTeddies(teddies) {
    let url = new URLSearchParams(window.location.search);
    let idTeddy = url.get("id");
    showTed(teddies, idTeddy);
}
function showTed(teddies, idTed) {
    let teddy = teddies.find(teddies => teddies["id"] == idTed);
    console.log(teddy);

}  

let bears = document.createElement("div");
    bears.classList.add("bg-info");
    let div = document.getElementById("bear");
    div.appendChild(bears);
    bears.textContent = "je vais y arriver un jour ?";
  


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
