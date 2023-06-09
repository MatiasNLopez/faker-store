
/**
    @param {*} props:{{url,options,cbSucces,cbError}} 
    @example {
        url: http://api.com/user,
        options: {
            method: 'POST' || 'GET' || 'PUT' || 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        },
        cbSuccess: function({
            //resolve successful promise result 
        }),
        cbError: function({
            //resolve not successful promise result 
        })
    }
*/
export async function ajax(props){
    const {url, options, cbSuccess, cbError} = props;
    await fetch(url, options)
        .then(res => res.ok? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err =>{
            let msg = err.statusText || "Ocurrio un error al acceder a la API";
            console.log(err);
            return err;
        })

}