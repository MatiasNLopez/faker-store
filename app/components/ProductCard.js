export function ProductCard(props) {
   const {category, description, image, price, title} = props;
    return ` 
        <article class=¨product-card¨>
            <img src="${image}" alt="${title}">
            <h1>${title}</h1>
            <p>${price}</p>
            <span><button>+</button></span>
        </article>
    `

    /* 
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    
    */
}