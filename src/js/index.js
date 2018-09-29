import Render from './models/Search';
import * as searchView from './views/searchView';
import * as cartView from './views/cartView';
import { elements } from './views/base';


const state = {};

const controlSearch = async () => {
     state.render = new Render();

     // search for result
     await state.render.getResults();
     // Render Results 
    // console.log(state.render.result);
     searchView.renderProducts(state.render.result);
}
controlSearch();

// List controller



// shopping list event 
loadEventListenets();

function loadEventListenets() {
    elements.result.addEventListener('click', buyProducts);

    // when remove button is clicked
    elements.shopingCartContent.addEventListener('click', removeProduct);

    // get products data from local storage
    document.addEventListener('DOMContentLoaded', cartView.getFromLocalStorage);
};

// function 

function buyProducts(e) {
     e.preventDefault();
   // use delegation    
    if(e.target.classList.contains('btn-primary')) {
       // console.log('Added');
       const product = e.target.parentElement.parentElement;

       // read the values
       cartView.getProductInfo(product);
       
    }
}

// remove product from the Cart
function removeProduct (e) {
    let product, productId;

    // Remove from the Dom
    if(e.target.classList.contains('btn')) {
        e.target.parentElement.parentElement.remove();
        product = e.target.parentElement.parentElement;
        productId = product.querySelector('button').getAttribute('data-id')
    }
    // Remove from the local storage
    console.log(productId);
   cartView.removeProductLocalStorage(productId);   
}


