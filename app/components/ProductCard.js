export function ProductCard(props) {
   const {category, description, id, image, price, title, rating} = props;
   
    return ` 
        <article class="product-card" data-id="${id}">
            <div class="image-content">
                <img src="${image}" alt="${title}">
                <span>  
                    <small>&#9733; ${rating.rate} ${rating.count} Opiniones</small>
                </span>
            </div>
            <div class="product-card_description">
                <p>${title}</p>
                <h3>$${price}</h3>
                
            </div>
        </article>
    `
}