import { Loader } from "./Loader.js";
import { Nav } from "./Nav.js";
import { FormSearch } from "./FormSearch.js";

export function Main(){
    const $main = document.createElement("main");
    
    $main.id="main";
    $main.classList.add("grid-fluid");
    
    return $main;
}