import _const from "../config/const.js"
import { Component } from "./Component.js";

export const Nav  = new Component({
    element: "#root",
    initialState: {

    },
    template: function(props){
        return `
            <nav class="nav">
                <a href="${_const.routes.home}">
                <img src="${_const.icons.home}" alt="home">
                </a>
                <a href="${_const.routes.favorite}">
                    <img src="${_const.icons.favorite}" alt="favorite">
                </a>
                <a href="${_const.routes.cart}">
                    <img src=${_const.icons.cart} alt="cart">
                </a>
                <a href="${_const.routes.profile}">
                    <img src=${_const.icons.profile} alt="profile">
                </a>
            </nav>
        `
    }
});
