export function Main(){
    const $main = document.createElement("main"),
    $h1 = document.createElement("h1");
    $h1.innerText="Faker Store";
    $main.id="main";
    $main.classList.add("grid-fluid");
    $main.appendChild($h1);
    return $main;
}