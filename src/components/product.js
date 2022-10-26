export class Product {
    constructor(name, price, quantity, finalPrice) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.finalPrice = finalPrice;

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