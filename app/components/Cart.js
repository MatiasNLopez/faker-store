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
    initialState:{},
    template: async function(props){
        const id = JSON.parse(localStorage.getItem('session')).id
        let htmlProduct = '',
        productPromise = {id:[],urls:[]},
        priceTotal = 0,
        carts =  await getCartsUser(id);
        
        /* Create urls product promise */
        carts.forEach(cart =>{
            cart.products.forEach(product => {
                if(productPromise.id.indexOf(product.productId) < 0){
                    productPromise.id.push(product.productId);
                    productPromise.urls.push(fetch(`${api.PRODUCTS}/${product.productId}`));
                }
            });
        })

        /* Get Prodcut  */
        productPromise.urls = await getProductCarts(productPromise.urls);
        
        /* Set data Product in carts  */
        carts.forEach(cart =>
            cart
            .products
            .forEach(products => products["data"] = productPromise.urls[`${products.productId}`])
        )
            
        carts["0"].products.forEach(product => {
            priceTotal += product.data.price
            htmlProduct += 
                `<article class="product-card" data-id="${product.productId}">
                    <div class="image-content">
                        <img src="${product.data.image}" alt="${product.data.title}">
                        <span>  
                            <small>&#9733; ${product.data.rating.rate} ${product.data.rating.count} Opiniones</small>
                        </span>
                    </div>
                    <div class="product-card_description">
                        <p>${product.data.title}</p>
                        <h3>$${product.data.price}</h3>
                    </div>
                </article>`
        });
        
        return `
            <section class="productsSection">
                ${htmlProduct}
            </section>
            <section class="checkoutSection">
                <strong> Total $${priceTotal}</strong>
                <input type="button" name="" id="" value="Comprar">
            </section>`
    },
    event: async function(){

    }
});

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

