import { Product } from '@components/product.js';

export function buildProduct(name) {
    if(showMessage(name)) { // Show message and check the value of inputs
        const product = new Product(name.value, price.value, quantity.value, (price.value*quantity.value));

        console.log(product);

        // Remove the data of the inputs
        // name.value = '';
        // quantity.value = '';
        // price.value = '';
    }
}

function showMessage(name) {
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