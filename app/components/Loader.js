import _const from '../config/const.js'
import { Component } from './Component.js';

export const Loader = new Component({
        element: "#main",
        initialState: { 
            hash: window.location.hash
        },
        template: function(props) {
            return `
                <img src="${_const.icons.spiner}" alt=Cargando..." class="loader">
            `
        }
    });

