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

    template() {
        const div = document.createElement('div');
        div.classList.add('product');
        div.id = 'product';
    
    
        div.innerHTML =  `
            <p class="product__item product__name">Name: ${this.name}</p>
            
            <p class="product__item product__quantity">Quantity: ${this.quantity}</p>
            
            <p class="product__item product__price">Price: ${this.price}</p>
            
            <p class="product__item product__total">Final price: ${this.finalPrice}</p>
            
            <button class="product__button delete" name="delete" onclick="deleteProduct(this)">Delete</button>
        `;
    
        return div;
    }
}