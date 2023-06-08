import _const from "../config/const.js";
export async function Login(props) {
    const {element} = props;
    const $form = d.querySelector(".form-login"),
        data = { 
            "username": `${$form.username.value}`,
            "password": `${$form.password.value}`
        };
        await ajax({
            url: api.LOGIN,
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            },
            cbSuccess: (data) =>{
                localStorage.setItem("session", JSON.stringify( {
                    token: data.token,
                    id: decodeJWT(data.token).sub
                }));
                w.location.hash = `${_const.routes.login}`;
                
            } 
        })
}

export async function auth(props) {
    const {element} = props;
    const $form = d.querySelector(".form-login"),
        data = { 
            "username": `${$form.username.value}`,
            "password": `${$form.password.value}`
        };
        await ajax({
            url: api.LOGIN,
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            },
            cbSuccess: (data) =>{
                localStorage.setItem("session", JSON.stringify( {
                    token: data.token,
                    id: decodeJWT(data.token).sub
                }));
                w.location.hash = `${_const.routes.login}`;
                
            } 
        })
}