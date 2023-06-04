import _const from "../config/const.js";
export function ProductCard(props) {
    const {element} = props;
    const postId = element.closest('.product-card').getAttribute("data-id");
    localStorage.setItem('post-id',postId);
    window.location.hash = `${_const.routes.product}${postId}`;
}