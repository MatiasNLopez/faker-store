import _const from '../config/const.js';
export function Login(){
    return `
        <form class="form-login" action="/" method="post">
            <h1>Faker Store Inicie Session</h1>
            <input name="username" type="text" placeholder="usuario" required>
            <input name="password" type="password" placeholder="contraseña" required>
            <h3>Si no tiene una cuenta puede <a href="${_const.routes.register}">Registrarse aqui!</a></h3>
            <input id="login-submit" type="submit" value="Iniciar">
        </form>
    `

}