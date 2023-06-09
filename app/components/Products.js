import { ajax } from "../helpers/ajax.js";
import { Component } from "./Component.js";
import api from "../helpers/api.js"

export const Products = new Component({
    element: "#main",
    initialState:{
        
    },
    template: async function(props) {
        let htmlTemplate = "";
        await ajax({
            url: api.PRODUCTS,
            cbSuccess: (products)=>{
                products.forEach(product => {
                    htmlTemplate += ` 
                        <article class="product-card" data-id="${product.id}">
                            <div class="image-content">
                                <img src="${product.image}" alt="${product.title}">
                                <span>  
                                    <small>&#9733; ${product.rating.rate} ${product.rating.count} Opiniones</small>
                                </span>
                            </div>
                            <div class="product-card_description">
                                <p>${product.title}</p>
                                <h3>$${product.price}</h3>
                            </div>
                        </article>
                    `;
                });
            },
        });
        return htmlTemplate;
    },
    event: async function(){
        const el = document.querySelector(".product-card *");
        const postId = el.closest('.product-card').getAttribute("data-id");
        localStorage.setItem('post-id',postId);
        window.location.hash = `${_const.routes.product}${postId}`;
    }
    
})