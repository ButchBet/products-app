import { Product } from '@components/product.js';

export function buildProduct() {
    const name = document.getElementById('name');
    const quantity = document.getElementById('quantity');
    const price = document.getElementById('price');
    const message = document.getElementById('message');
    const products = document.getElementById('products');

    if(showMessageInput(name)) { // Show message and check the value of inputs
        const product = new Product(name.value, price.value, quantity.value, (price.value*quantity.value));

        const productHTML = product.template();

        products.appendChild(productHTML);

        productHTML.addEventListener('click', deleteProduct);
        // Remove the data of the inputs
        // name.value = '';
        // quantity.value = '';
        // price.value = '';
    }
}

function deleteProduct(e) {
    const target = e.target;
    const parentElement = target.parentElement; // Get the parent element
    
    parentElement.remove(); // Remove it 

    showMessageDelete(); // show the removed message 
}

function showMessageInput(name) {
    if(name.value.trim() === '' || quantity.value.trim() === '' || price.value.trim() === '') { // checking if any of the inputs is empty
        message.textContent = 'Any of the inputs is empty.'
        message.classList.add('error');
        message.classList.remove('hidden');

        setTimeout(() => { // Remove the message
            message.classList.add('hidden');
            message.classList.remove('error');
        }, 3000);

        return false;
    } else { // In case that the inputs are with data
        message.textContent = 'Product added successylly.'
        message.classList.add('success');
        message.classList.remove('hidden');

        setTimeout(() => { // Remove the message
            message.classList.add('hidden');
            message.classList.remove('success');
        }, 3000);

        return true;
    }
}

function showMessageDelete() {
    message.textContent = 'Product deleted successfully'
    message.classList.add('success');
    message.classList.remove('hidden');

    setTimeout(() => { // Remove the message
        message.classList.add('hidden');
        message.classList.remove('success');
    }, 3000);
}