import _const from "../config/const.js";
import { Component } from "./Component.js";

export const FormSearch = new Component({
    element:".header",
    initialState: {

    },
    template: function(){
        return `
            <form class="search-form" action="">
                <input class="search" type="search" name="search" placeholder="Buscar Producto..." autocomplete="false">
            </form>`
    }
});