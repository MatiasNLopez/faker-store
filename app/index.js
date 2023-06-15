import _const from "./config/const.js";
import { App } from "./App.js";
import { Router } from "./components/Router.js";
import { Register } from "./components/Register.js";
import { Login } from "./components/Login.js";
import { Products } from "./components/Products.js";
import { Cart } from "./components/Cart.js";

const d = document,
    w = window;

d.addEventListener("DOMContentLoaded",App())

d.addEventListener("click", async e => {
    const element = e.target;
    if(element.matches(".product-card *")){
        await Products.getEvent();
    }
    else if (element.matches("#login-submit")){
        e.preventDefault()
        await Login.getEvent();
        
    }
    else if (element.matches("#register-submit")){
        e.preventDefault();
        await Register.getEvent();
    }
    else if(element.matches("#del-quantity") || element.matches("#add-quantity")){
        const $quantity = d.getElementById("quantity");
        let value =  Number.parseInt($quantity.value);
        
        element.matches("#del-quantity") 
        ? $quantity.value = value > $quantity.min ? value - 1 : value
        : $quantity.value = value < $quantity.max ? value + 1 : value;
    }

    else return
  
})

w.addEventListener("hashchange", () =>{
   Router()
})

