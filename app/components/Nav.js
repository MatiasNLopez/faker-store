import conf from "../config/const.js"

export function Nav(){
    const $nav = document.createElement("nav");
    
    $nav.classList.add("nav");
    $nav.innerHTML=`
        <a href="${conf.rutes.home}">
            <img src="${conf.icons.home}" alt="home">
        </a>
        <a href="${conf.rutes.favorite}">
            <img src="${conf.icons.favorite}" alt="favorite">
        </a>
        <a href="${conf.rutes.cart}">
            <img src=${conf.icons.cart} alt="cart">
        </a>
        <a href="${conf.rutes.profile}">
            <img src=${conf.icons.profile} alt="profile">
        </a>
    `;
    return $nav;
}