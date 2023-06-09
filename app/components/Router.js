
import _const from "../config/const.js";
import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { Products } from "./Products.js";
import { Product } from "./Product.js";
import { Login } from "./Login.js";
import { decodeJWT } from "../helpers/jwt-token.js";
import { Register } from "./Register.js";
import { Main } from "./Main.js";
import { Loader } from "./Loader.js";
import { Profile } from "./Profile.js";

export async function Router() { 
    const d = document,
        w = window,
        hash = w.location.hash;
        
        d.getElementById('main').innerHTML = ""
        Loader.render();
        
        if(!JSON.parse(localStorage.getItem("session")) && !Main.getState().session.token){
            hash !== _const.routes.register 
            ? Login.render()
            : Register.render();
        }
        else {
           
            if(!hash || hash === _const.routes.home){
                await Products.renderAsync();
            }
            else if(hash.includes(_const.routes.product)){
                await Product.renderAsync();
            }
            else if(hash === _const.routes.profile){
                await Profile.renderAsync();
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
    d.querySelector(".loader").style.display = "none";
    
    
}