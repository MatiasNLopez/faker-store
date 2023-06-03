
import _const from "../config/const.js";
import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { ProductCard } from "./ProductCard.js";
import { Product } from "./Product.js";

export async function Router() { 
    const d = document,
        w = window,
        $main = d.querySelector('main'),
        $loader = d.querySelector('.loader'),
        hash = w.location.hash;

    $main.innerHTML = null;
    
    if(!hash || hash === _const.routes.home){
        await ajax({
            url: api.PRODUCTS,
            cbSuccess: (products)=>{
                let html = '';
                

                products.forEach(product => {
                    html += ProductCard(product);
                });

                $main.innerHTML = html;
            }
        })
    }
    else if(hash.includes(_const.routes.product)){
        await ajax({
            url:`${api.PRODUCTS}/${localStorage.getItem('post-id')}`,
            cbSuccess: product => $main.innerHTML = Product(product)
        })
    }
    
    $loader.style.display = "none";
    
}