export function Header() {
    const $header = document.createElement("header");
    
    $header.classList.add("header");
    $header.innerHTML= "<h1>Faker Store</h1>";

    return $header;
}