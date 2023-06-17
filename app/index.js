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

w.addEventListener("hashchange", () =>{
   Router()
})