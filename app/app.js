import { Main } from "./components/Main.js";

export function App(){
    const d = document,
    $root = d.getElementById("root");
    $root.appendChild(Main());

    
}
