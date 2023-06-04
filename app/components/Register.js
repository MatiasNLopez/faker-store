import _const from '../config/const.js';
export function Register(){
    return `
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
}