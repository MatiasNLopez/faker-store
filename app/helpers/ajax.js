export async function ajax(props){
    const {url, options, cbSuccess} = props;
    await fetch(url, options)
        .then(res => res.ok? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err =>{
            let msg = err.statusText || "Ocurrio un error al acceder a la API";
            return err;
        })

}