export function ProductCard(props) {
   const {category, description, image, price, title} = props;
   
    return ` 
        <article class="product-card">
            <div class="image-content">
                <img src="${image}" alt="${title}">
            </div>
            <div class="product-card_description">
                <p>${title}</p>
                <h3>$${price}</h3>
                <span><button>+</button></span>
            </div>
        </article>
    `
}