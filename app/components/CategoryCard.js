export function CategoryCard(props){
    const {category} = props;
    return ` 
        <article class="category-card">
            <h3>${category}</h3>
        </article>
    `
}