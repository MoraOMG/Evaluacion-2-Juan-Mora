const sesion =
    JSON.parse(localStorage.getItem("sesion"));

const reserva =
    JSON.parse(localStorage.getItem("reserva"));

if (!sesion || !reserva) {
    window.location.href = "login.html";
}

document.getElementById("dato1").textContent =
    reserva.nombre;

document.getElementById("dato2").textContent =
    reserva.destino;

document.getElementById("dato3").textContent =
    reserva.fecha;

document.getElementById("dato4").textContent =
    reserva.pasajeros;

document.getElementById("dato5").textContent =
    reserva.hospedaje;

document.querySelector("h1").textContent =
    "Reserva realizada correctamente";

document.getElementById("btnCerrar")
.addEventListener("click", () => {

    localStorage.removeItem("sesion");
    localStorage.removeItem("reserva");

    window.location.href =
        "login.html";
});