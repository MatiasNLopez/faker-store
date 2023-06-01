export function ProductCard(props) {
   const {category, description, id, image, price, title} = props;
   
    return ` 
        <article class="product-card" data-id="${id}">
            <div class="image-content">
                <img src="${image}" alt="${title}">
            </div>
            <div class="product-card_description">
                <p>${title}</p>
                <h3>$${price}</h3>
                
            </div>
        </article>
    `
}