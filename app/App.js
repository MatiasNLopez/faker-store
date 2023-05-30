import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Nav } from "./components/Nav.js";
import { Router } from "./components/Router.js";

export function App(){
    const d = document,
    $root = d.getElementById("root");

    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
    $root.appendChild(Nav());

    Router()
    
}
