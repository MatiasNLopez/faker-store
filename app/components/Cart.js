/* 
    id:1,
    userId:1,
    date:2020-10-10,
    products:[{productId:2,quantity:4},{productId:1,quantity:10},{productId:5,quantity:2}]
*/

import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
import { Component } from "./Component.js";
import { Products } from "./Products.js";

export const Cart = new Component({
    element: "#main",
    initialState:{
        carts: await initialCartsState(),
    },
    template: async function(props){
        
        let firtCart = props.carts["0"],
            htmlProduct = '';
        firtCart.products.forEach(product => {
            htmlProduct += 
                `<article class="cart-product" data-id="${product.productId}">
                    <div class="cart-prodcut_image">
                        <img src="${product.data.image}" alt="${product.data.title}">
                        <span>  
                            <button id="del-quantity" class="btn">-</button>
                            <input id="quantity" type="Number" min=1 max=50 value=${product.quantity}>
                            <button id="add-quantity" class="btn">+</button>
                        </span>
                    </div>
                    <div class="cart-product-description">
                        <p>${product.data.title}</p>
                        <h3>$${product.data.price}</h3>
                    </div>
                </article>`
        });
        
        return `
            
            <section calass="cart">
                <p>Date ${new Date(firtCart.date).toLocaleDateString()}</p>
                ${htmlProduct}
                <aside class="checkoutSection">
                    <strong> Total $${firtCart.priceTotal}</strong>
                    <input type="button" name="" id="" value="Comprar">
                </aside>
            </section>`
    },
    event: async function(props){
        const d = document;
        
       d.addEventListener('click', e => {
            if(e.target.matches("#del-quantity") || e.target.matches("#add-quantity")){
                const el = e.target.closest('.cart-product'),
                    $quantity =  el.querySelector("#quantity");

                let value =  Number.parseInt($quantity.value);
                e.target.matches("#del-quantity") 
                ? $quantity.value = value > $quantity.min ? value - 1 : value
                : $quantity.value = value < $quantity.max ? value + 1 : value;
            }
       })
    
    }
});


async function initialCartsState(){
    const id = JSON.parse(localStorage.getItem('session'))?.id;
    if(!id)  return
    let carts = await getCartsUser(id),
    promises = createProductPromise(carts);
    
    /* Get Prodcut  */
    promises.urls = await getProductCarts(promises.urls);
    
    /* Set data Product in carts  */
    carts.forEach(cart =>{
        cart["priceTotal"] = 0;
        cart
        .products
        .forEach(product => {
            product["data"] = promises.urls[`${product.productId}`];
            cart["priceTotal"] += product["data"].price * product.quantity;
        })
    })
    
    
    return carts;
}


function createProductPromise(carts){
    let productPromise = {id:[],urls:[]};

    carts.forEach(cart =>{
        cart.products.forEach(product => {
            if(productPromise.id.indexOf(product.productId) < 0){
                productPromise.id.push(product.productId);
                productPromise.urls.push(fetch(`${api.PRODUCTS}/${product.productId}`));
            }
        });
    })
    return productPromise;
}

async function getCartsUser(id) {  
    let carts = {};
    await ajax({
        url: `${api.USER_CARTS}/${id}`,
        cbSuccess: res => carts = res
    })
    return carts;
}

async function getProductCarts(promise){
    let products = {};
    promise = await Promise.all(promise)
    .then(responses => Promise.all(responses.map(res => res.json())))
    
    promise.forEach(product => {
        if(!products.hasOwnProperty(`${product.id}`))
            products[`${product.id}`] = product
    });

    return products;    
}

