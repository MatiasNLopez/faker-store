import _const from "./config/const.js";
import api from './helpers/api.js';
import { App } from "./App.js";
import { Router } from "./components/Router.js";
import { ajax } from "./helpers/ajax.js";
import { decodeJWT } from "./helpers/jwt-token.js";

const d = document,
    w = window;

d.addEventListener("DOMContentLoaded",App())
d.addEventListener("click", async e => {
    const element = e.target;
    if(element.matches(".product-card *")){
        const postId = element.closest('.product-card').getAttribute("data-id");
        localStorage.setItem('post-id',postId);
        w.location.hash = `${_const.routes.product}${postId}`;
    }
    else if (element.matches("#login-submit")){
        e.preventDefault()
        const $form = d.querySelector(".form-login"),
        data = { 
            "username": `${$form.username.value}`,
            "password": `${$form.password.value}`
        };
        await ajax({
            url: api.LOGIN,
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            },
            cbSuccess: (data) =>{
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", decodeJWT(data.token).sub)
                w.location.hash = `${_const.routes.login}`;
                
            } 
        })
    }
    else return
  
})

w.addEventListener("hashchange", () =>{
    Router()
})