import _const from "../config/const.js";

export async function Register(props) {
    const $form = d.querySelector(".form-register"),
        data = { 
            email: `${$form.email.value}`,
            username: `${$form.username.value}`,
            password: `${$form.password.value}`,
            name:{
                firstname:`${$form.name.value}`,
                lastname:`${$form.lastname.value}`
            }
        };
        await ajax({
            url: api.REGISTER,
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            },
            cbSuccess: (data) =>{
                if(!data)  w.location.reload();
                w.location.hash = `${_const.routes.login}`;
                
            } 
        })
}