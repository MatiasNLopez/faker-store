import _const from '../config/const.js';
import { Component } from './Component.js';

export const Register = new Component({
    element: "#main",
    initialState: {

    },
    template: function(props){
        return  `
            <form class="form-register" action="/" method="post">
                <h1>Faker Store Cree una cuenta</h1>
                <input name="name" type="text" placeholder="Nombre" required>
                <input name="lastname" type="text" placeholder="Apellido" required>
                <input name="username" type="text" placeholder="Nombre de usuario" required>
                <input name="email" type="text" placeholder="Email" required>
                <input name="password" type="password" placeholder="Contraseña" required>
                <input name="password" type="password" placeholder="Confirme contraseña">
                <h3>Si ya tiene una cuenta puede <a href="${_const.routes.login}">Inciar aqui!</a></h3>
                <input id="register-submit" type="submit" value="Registrar">
            </form>
        `
    }, 
    event: async function(){
        const d = document;
        d.addEventListener('click', async e => {
            e.preventDefault();
            if(e.target.matches("#register-submit")){
                await RegisterUser(d,e)
            }
        })
    }
});

async function RegisterUser(d,e) {
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