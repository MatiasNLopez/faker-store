import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
import { Component } from "./Component.js";

export const Profile = new Component({
    element: "#main",
    initialState:{},
    template: async function(){
        const id = JSON.parse(localStorage.getItem('session')).id
        let html = '';
        await ajax({
            url: `${api.USERS}/${id}`,
            cbSuccess: (user) => {
                html = `   
                    <article class="profile" data-id="${user.id}">
                        <section class="profile_acount">
                            <h3><a href="">Editar</a></h3>
                            <h2>Datos de la cuenta</h2>
                            <p><strong>Usuario:</strong> ${user.username}</p>
                            <p><strong>Email:</strong> ${user.email}</p>
                        </section>
                        <section class="profile_person" >
                            <h3><a href="">Editar</a></h3>
                            <h2>Datos Personales</h2>
                            <p><strong>Nombre:</strong> ${user.name.firstname}</p>
                            <p><strong>Apellido:</strong> ${user.name.lastname}</p>
                            <p><strong>Telefono:</strong> ${user.phone}</p>
                        </section>
                        <section class="profile_address" >
                            <h3><a href="">Editar</a></h3>
                            <h2>Direccion</h2>
                            <p><strong>Ciudad:</strong> ${user.address.city}</p>
                            <p><strong>Codigo: postal</strong> ${user.address.zipcode}</p>
                            <p><strong>Dreccion:</strong> ${user.address.street} - ${user.address.number} </p>
                        </section>
                        <h2><a href="">Cerrar Sesion</a></h3>
                    </article>
                `
            }
        });
        return html;
    },
    event: function(){

    }
});

