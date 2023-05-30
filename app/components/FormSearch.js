import conf from "../config/const.js";

export function FormSearch(){
    const d = document,
        $input = d.createElement("input"),
        $form =  d.createElement("form");
        
    $input.name = "search"
    $input.type= "search";
    $input.placeholder = "Buscar Producto...";
    $input.classList.add("search");
    $input.autocomplete = "off";

    $form.classList.add("search-form");
    $form.appendChild($input);

    d.addEventListener('submit', e =>{

        if(!location.hash.includes(conf.rutes.search)) return
        
    })

    return $form;
}