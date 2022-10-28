import { buildProduct } from '@components/tools.js';
import '@css/styles.css';
import '@css/tablet.css';
import '@css/desktop.css';

const remove = Array.from(document.getElementsByClassName('delete'));
const add = document.getElementById('add');
const name = document.getElementById('name');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');
const message = document.getElementById('message');

[...remove, add].forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault(); 
        const id = e.target.name;

        switch (id) {
            case 'add':
                    buildProduct(name);
                break;
        
            case 'delete': 
                console.log('We will remove');
        }
    })
});