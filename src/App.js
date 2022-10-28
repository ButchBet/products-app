import { buildProduct } from '@components/tools.js';
import '@css/styles.css';
import '@css/tablet.css';
import '@css/desktop.css';

const add = document.getElementById('add');

add.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    buildProduct();
});