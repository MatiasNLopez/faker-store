import _const from "../config/const.js"

export function Nav(){
    const $nav = document.createElement("nav");
    
    $nav.classList.add("nav");
    $nav.innerHTML=`
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
    `;
    return $nav;
}