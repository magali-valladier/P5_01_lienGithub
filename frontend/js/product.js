const urlParams = new URLSearchParams(window.location.search)
    let id = urlParams.get("id")

// 5 CARDS CURL WITH FOR

function getTeddies(teddies) {
    
     let ted = document.createElement("div");
        ted.classList.add("ted", "bg-info", "rounded");
        let div = document.getElementById("bear");
        div.appendChild(ted);

    let tedImg = document.createElement("img");
    ted.appendChild(tedImg);
    tedImg.src = id.imageUrl;
}


// API REQUEST WITH ASYNC FUNCTION
const getAllTeddies = async function () {
    let response = await fetch("http://localhost:3000/api/teddies/" + id)
    if (response.ok) {
       teddies = await response.json();
            getTeddies(teddies);
    } else {
        console.error("Error", response.status)
    }
}

// REACH API FUNCTION
getAllTeddies()
