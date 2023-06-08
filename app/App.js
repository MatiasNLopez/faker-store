import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Nav } from "./components/Nav.js";
import { Router } from "./components/Router.js";

export function App(){
    const d = document,
    $root = d.getElementById("root");
    Header.render()
    Main.render();
    Loader.render();
    Nav.render();
    Router();
}
