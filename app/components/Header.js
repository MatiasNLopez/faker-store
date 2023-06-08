import _const from "../config/const.js";
import { Component } from "./Component.js";
import { FormSearch } from "./FormSearch.js";

export const Header = new Component({
    element: "#root",
    initialState: { 
        hash: window.location.hash
    },
    template: function(props) {
        return `
            <header class="header">
                <h1>Faker Store</h1>
            </header>
        `
    }
});