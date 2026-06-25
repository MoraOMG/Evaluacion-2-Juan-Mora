// Implementar login

const usuarioInput = document.getElementById("usuario");
const passwordInput = document.getElementById("password");
const errores = document.getElementById("errores");
const boton = document.querySelector("button");

const USUARIO = "juan.mora";
const PASSWORD = "JS2026JM11";

boton.addEventListener("click", () => {
    let listaErrores = [];

    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();

    if (!usuario) {
        listaErrores.push("Debe ingresar el usuario.");
    }

    if (!password) {
        listaErrores.push("Debe ingresar la contraseña.");
    }

    if (listaErrores.length === 0) {
        if (usuario !== USUARIO || password !== PASSWORD) {
            listaErrores.push("Credenciales incorrectas.");
        }
    }

    if (listaErrores.length > 0) {
        errores.innerHTML =
            `<ul>${listaErrores.map(e => `<li>${e}</li>`).join("")}</ul>`;
        return;
    }

    localStorage.setItem(
        "sesion",
        JSON.stringify({
            usuario: usuario
        })
    );

    window.location.href = "formulario.html";
});

