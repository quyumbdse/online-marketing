import { elements } from './base';


const renderResult = result => {
    const myimg = "data:image/jpeg;base64,";
    const markup = `
          <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100">
                    <a class="results__link" href="#${result.id}">
                        <img class="card-img-top" src="${myimg + result.productImage}" width="150" height="200" alt="">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <a href="#">${result.status}</a>
                                </h4>
                                <h5>${result.productPrice + ' DKK ' }</h5>
                                <button class = "btn btn-primary" data-id = "${result.id}">AddToCart</button>
                            </div>
                        <div class="card-footer">
                            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </a>
                </div>
            </div>
          
    `;
    elements.result.insertAdjacentHTML('beforeend', markup);
};


export const renderProducts = (product, page = 1 , resPerPage= 8) => {
    const start =(page -1) * resPerPage;
    const end = page * resPerPage;
    product.slice(start, end).forEach(renderResult);
} 