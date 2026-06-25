// Implementar formulario

const sesion = JSON.parse(localStorage.getItem("sesion"));

if (!sesion) {
    window.location.href = "login.html";
}

document.getElementById("nombreUsuario").textContent =
    sesion.usuario;

const boton = document.querySelector("button");

boton.addEventListener("click", () => {

    const nombre =
        document.getElementById("nombre").value.trim();

    const destino =
        document.getElementById("destino").value.trim();

    const fecha =
        document.getElementById("fecha").value;

    const pasajeros =
        document.getElementById("pasajeros").value;

    const hospedaje =
        document.getElementById("hospedaje").value;

    const errores = [];

    if (!nombre) {
        errores.push("Nombre obligatorio.");
    }

    if (nombre.length < 3 || nombre.length > 100) {
        errores.push("Nombre entre 3 y 100 caracteres.");
    }

    if (!destino) {
        errores.push("Destino obligatorio.");
    }

    if (!fecha) {
        errores.push("Debes seleccionar fecha.");
    }

    if (!pasajeros) {
        errores.push("Cantidad obligatoria.");
    } else if (pasajeros < 1 || pasajeros > 8) {
        errores.push("Cantidad entre 1 y 8 pasajeros.");
    }

    if (!hospedaje) {
        errores.push("Seleccione hospedaje.");
    }

    const contenedor =
        document.getElementById("errores");

    if (errores.length > 0) {

        contenedor.innerHTML =
            `<ul>
                ${errores.map(e => `<li>${e}</li>`).join("")}
            </ul>`;

        return;
    }

    localStorage.setItem(
        "reserva",
        JSON.stringify({
            nombre,
            destino,
            fecha,
            pasajeros,
            hospedaje
        })
    );

    window.location.href = "exito.html";
});