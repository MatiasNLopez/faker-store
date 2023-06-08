
import _const from "../config/const.js";
import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { Products } from "./Products.js";
import { Product } from "./Product.js";
import { Login } from "./Login.js";
import { decodeJWT } from "../helpers/jwt-token.js";
import { Register } from "./Register.js";
import { Main } from "./Main.js";

export async function Router() { 
    const d = document,
        w = window,
        hash = w.location.hash;

    if(!localStorage.getItem("session")){
        hash !== _const.routes.register 
        ? Login.render()
        : Register.render();
    }else {
        if(!hash || hash === _const.routes.home){
            Products.renderAsync();
        }
        else if(hash.includes(_const.routes.product)){
            Product.renderAsync();
        }
        else if(hash === _const.routes.profile){
            const id = JSON.parse(localStorage.getItem('session')).id
            await ajax({
                url: `${api.USERS}/${id}`,
                cbSuccess: user => console.log(user)
            })
        } 
        else if(hash === _const.routes.cart){
            await ajax({
                url: `${api.CARTS}`,
                cbSuccess: products => console.log(products)
            })
        }
        else if(hash === _const.routes.login || _const.routes.register) 
            w.location.hash = _const.routes.home 
    }
   
}