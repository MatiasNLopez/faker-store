import conf from '../config/const.js'

export function Loader(){
    const $loader = document.createElement('img');
    $loader.src = conf.icons.spiner;
    $loader.alt= "Cargando...";
    $loader.classList.add('Loader');
    return $loader;
}