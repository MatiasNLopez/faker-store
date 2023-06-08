import api from "../helpers/api.js"
import { ajax } from "../helpers/ajax.js";
import { Component } from "./Component.js";

export const Product = new Component({
    element: "#main",
    initialState:{

    },
    template: async function(){
        let body="";
        await ajax({
            url:`${api.PRODUCTS}/${localStorage.getItem('post-id')}`,
            cbSuccess: (product) =>{
                body =`
                    <article class="product-page">
                        <div class="photo">
                            <img src="${product.image}" alt="imagen del producto" class="image-product">
                        </div>
                        <div class="product-page_desciption">
                            <span>  
                                <p>Price: $${product.price}</p>
                                <p>&#9733; ${product.rating.rate} ${product.rating.count} Opiniones</p>
                            </span>
                            <h1>${product.title}</h1>
                            <p>${product.description}</p>
                        </div>
                        <form class="product-page_form-checkout" action="">
                            <div class="product-quantity-container">
                                <span>-</span>
                                <input class="product-quantity" type="number" name="number" min = "1" max="100" value="1">
                                <span>+</span>
                            </div>
                            <input class="btn-add-cart" type="submit" value="Agregar al carrito">
                        </form>
                    </article>`
                }
            })
            return body;
        }
});