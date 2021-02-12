class Teddy {
    constructor(id, name, price, description, imageUrl) {
        this.id = teddies[i].id;
        this.name = teddies[i].name;
        this.price = teddies[i].price;
        this.description = teddies[i].description;
        this.imageUrl = teddies[i].imageUrl;
    }
    showTeddy() {
        return this.imageUrl + this.name + this.price
    }
}
const newTed = new Teddy(teddies[i]);
document.getElementsByClassName(cardDiv).innerHTML = newTed.show;
