export class Product {
    constructor(name, price, quantity, finalPrice, date) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.finalPrice = finalPrice;
        this.date = date;
    }

    set pName(value) {
        this.name = value;
    }

    set pPrice(value) {
        this.price = value;
    }

    set pQuantity(value) {
        this.quantity = value;
    }

    set pFinalPrice(value) {
        this.finalPrice = value;
    }
}