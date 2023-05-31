
import conf from "../config/const.js";
import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { ProductCard } from "./ProductCard.js";

export async function Router() { 
    const d = document,
        w = window,
        $main = d.querySelector('main'),
        $loader = d.querySelector('.loader'),
        hash = w.location.hash;

    $main.innerHTML = null;


    if(!hash || hash === conf.rutes.home){
        await ajax({
            url: api.PRODUCTS,
            cbSuccess: (products)=>{
                let html = '';
                /* console.log(products); */

                products.forEach(product => {
                    html += ProductCard(product);
                });

                $main.innerHTML = html;
            }
        })
    }
    
    $loader.style.display = "none";
    
}