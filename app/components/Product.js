export function Product(props){
    const {title,price,category,description,image,rating} = props;
    /* 
        category
        id
        image
        price
        rating{
            count
            rate
        }
        title
    
    */
    return `
        <article class="product-page">
            <div class="photo">
                <img src="${image}" alt="imagen del producto" class="image-product">
            </div>
            <div class="product-page_desciption">
                <span>  
                    <p>Price: $${price}</p>
                    <p>&#9733; ${rating.rate} ${rating.count} Opiniones</p>
                </span>
                <h1>${title}</h1>
                <p>${description}</p>
            </div>
            <form class="product-page_form-checkout" action="">
                <div class="product-quantity-container">
                    <span>-</span>
                    <input class="product-quantity" type="number" name="number" min = "1" max="100" value="1">
                    <span>+</span>
                </div>
                <input class="btn-add-cart" type="submit" value="Agregar al carrito">
            </form>
        </article>
    `
}