import _const from '../config/const.js'

export function Loader(){
    const $loader = document.createElement('img');
    $loader.src = _const.icons.spiner;
    $loader.alt= "Cargando...";
    $loader.classList.add('loader');
    return $loader;
}