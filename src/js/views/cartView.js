import { elements } from './base';


// read the html element information of the selected course

export const getProductInfo = (product) => {
    // console.log(course);
    const productInfo = {
        image: product.querySelector('img').src,
        price: product.querySelector('h5').textContent,
        id: product.querySelector('button').getAttribute('data-id')
    }
    //console.log(productInfo);
    // Insert into Cart
    addInfoCart (productInfo);
    totalPrice();
}

// total price calculate function
function totalPrice() {
    
    const total = [];
    const items = document.querySelectorAll('.item-info');
    items.forEach(function (item) {
        total.push(parseFloat(item.textContent));
    });
   // console.log(total);
   const totalPrice = total.reduce(function (total, item) {
       total += item;
       return total;
   }, 0);

   // console.log('total '+ totalPrice);
    document.querySelector('#total-price').textContent = totalPrice;
}

const templateBuild = function(product) {
    // build template
    const row = document.createElement('tr');
    row.innerHTML = `
    
    <li>
    <span class="item">
      <span class="item-left">
          <img src="${product.image}" width="100" height="150"/>
          <span class="item-info">
              <span>${product.price}</span>
      </span>
      </span>
      <span class="item-right">
          <button class="btn btn-xs btn-danger pull-right" data-id ="${product.id}">x</button>
      </span>
  </span>
</li>
    `;
    // add into shoping cart
    elements.shopingCartContent.appendChild(row);
    
}

const addInfoCart = (product) => {
   // 
    templateBuild(product);
    saveIntoStorage(product);
}

function saveIntoStorage(product) {
    let products = getProductsFromStorage();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

 // get the content from storage

 function getProductsFromStorage() {
     let products;

     if (localStorage.getItem('products') === null) {
         products = [];
     } else {
         products = JSON.parse(localStorage.getItem('products'));
     }
     return products;
 }


 // load products data from local storage
 
 export function getFromLocalStorage() {
    let productsLS = getProductsFromStorage();
    productsLS.forEach( function (product) {
    templateBuild(product);
    });
}

// remove from localstorage
export function removeProductLocalStorage (id) {
    let productsLS = getProductsFromStorage();
    productsLS.forEach(function (productLS, index) {
        if (productLS.id === id) {
            productsLS.splice(index, 1)
        }
    });
    //console.log(productsLS);
    localStorage.setItem('products', JSON.stringify(productsLS));
    
}