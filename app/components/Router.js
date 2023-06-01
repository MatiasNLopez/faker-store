
import conf from "../config/const.js";
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
    console.log(`hash: ${hash} includes: ${conf.rutes.product} -> ${hash.includes(conf.rutes.product)}`);

    if(!hash || hash === conf.rutes.home){
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
    else if(hash.includes(conf.rutes.product)){
        await ajax({
            url:`${api.PRODUCTS}/${hash.slice(-1)}`,
            cbSuccess: product => $main.innerHTML = Product(product)
        })
    }
    
    $loader.style.display = "none";
    
}