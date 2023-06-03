import _const from "./config/const.js";
import { App } from "./App.js";
import { Router } from "./components/Router.js";

const d = document,
    w = window;

d.addEventListener("DOMContentLoaded",App())
d.addEventListener("click", e => {
    const element = e.target;
    if(!element.matches(".product-card *")) return;
  
    const postId = element.closest('.product-card').getAttribute("data-id");
    localStorage.setItem('post-id',postId);
    w.location.hash = `${_const.routes.product}${postId}`;
})

w.addEventListener("hashchange", () =>{
    Router()
})