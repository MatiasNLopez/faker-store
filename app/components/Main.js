import { Loader } from "./Loader.js";
import { Nav } from "./Nav.js";
import { FormSearch } from "./FormSearch.js";
import { Component } from "./Component.js";

export const Main = new Component({
    element: "#root",
    initialState: { 
        session: {}
    },
    template: function(props) {
        return `
            <main id="main" class="grid-fluid"></main>`
    }
})