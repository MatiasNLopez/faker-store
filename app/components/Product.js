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
            <h1>${title}</h1>
            <h3>Categoria: ${category}</h3>
            <div class="photo">
                <img src="${image}" alt="imagen del producto" class="image-product">
            </div>
            <div>
                <p>Price: $${price}</p>
                <form action="">
                    <input type="submit" value="Comprar">
                </form>
            </div>
            <div>
                <h2>Desciption</h2>
                <p>${description}</p>
            </div>
        </article>
    `
}