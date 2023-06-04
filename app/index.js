import _const from "./config/const.js";
import api from './helpers/api.js';
import { App } from "./App.js";
import { Router } from "./components/Router.js";
import { ProductCard } from "./actions/ProductCard.js";
import { Login } from "./actions/Login.js";
import { Register } from "./actions/Register.js";

const d = document,
    w = window;

d.addEventListener("DOMContentLoaded",App())
d.addEventListener("click", async e => {
    const element = e.target;
    if(element.matches(".product-card *")){
        ProductCard({element});
    }
    else if (element.matches("#login-submit")){
        e.preventDefault()
        Login();
    }
    else if (element.matches("#register-submit")){
        e.preventDefault();
        Register();
    }
    else return
  
})

w.addEventListener("hashchange", () =>{
    Router()
})