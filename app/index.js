import _const from "./config/const.js";
import { App } from "./App.js";
import { Router } from "./components/Router.js";
import { Register } from "./components/Register.js";
import { Login } from "./components/Login.js";
import { Products } from "./components/Products.js";

const d = document,
    w = window;

d.addEventListener("DOMContentLoaded",App())
d.addEventListener("click", async e => {
    const element = e.target;
    if(element.matches(".product-card *")){
        Products.getEvent();
    }
    else if (element.matches("#login-submit")){
        e.preventDefault()
        Login.getEvent();
        
    }
    else if (element.matches("#register-submit")){
        e.preventDefault();
        Register.getEvent();
    }
    else return
  
})

w.addEventListener("hashchange", () =>{
   Router()
})