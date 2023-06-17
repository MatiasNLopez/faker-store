import api from '../helpers/api.js';    
import _const from '../config/const.js';
import { ajax } from '../helpers/ajax.js';
import { Component } from './Component.js';
import { Main } from './Main.js';
import {decodeJWT} from '../helpers/jwt-token.js'

export const Login = new Component({
    
    element: "#main",
    initialState: {},
    template: function(props){
        return  `
            <form class="form-login" action="/" method="post">
                <h1>Faker Store Inicie Session</h1>
                <input name="username" type="text" placeholder="usuario" required>
                <input name="password" type="password" placeholder="contraseña" required>
                <h3>Si no tiene una cuenta puede <a href="${_const.routes.register}">Registrarse aqui!</a></h3>
                <input id="login-submit" type="submit" value="Iniciar">
            </form>
        `
    },
    event: async function(){
        const d = document;
        d.addEventListener('click',async e => {
            e.preventDefault();
            if(e.target.matches("#login-submit")){
                await Auth(d,e);
            }
        })
    }
})

async function Auth(d,e) {
    const $form = document.querySelector(".form-login"),
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
        cbSuccess: (user) =>{
            Main
            .setState({
                session: {
                    token: user.token, 
                    id: decodeJWT(user.token).sub
                }
            })
            
            localStorage.setItem("session", JSON.stringify(Main.getState().session));
            
           /*  localStorage.setItem("session", JSON.stringify( {
                token: data.token,
                id: decodeJWT(data.token).sub
            })); */
            window.location.hash = `${_const.routes.login}`;
            
        } 
    })
}