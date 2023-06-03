import _const from "../config/const.js";
import { FormSearch } from "./FormSearch.js";
export function Header() {
    const $header = document.createElement("header");
    
    $header.classList.add("header");
    console.log(window.location.hash);

    if(!window.location.hash || window.location.hash ===  _const.routes.home){
        $header.appendChild(FormSearch())
    }
    else{
        console.log("aca");
        $header.innerHTML = `<h1>Faker Store</h1>`
    }

    return $header;
}