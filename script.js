
const modal = document.getElementById("modalGlam");
const botonSaludar = document.getElementById("botonSaludar");
const botonCerrar = document.getElementById("botonMeEncanta");
const botonX = document.getElementById("cerrarX");

// Abrir la ventana emergente
function saludar() {
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    botonX.focus();
}

// Cerrar la ventana emergente
function cerrarModal() {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    botonSaludar.focus();
}

// Conectar los botones
botonSaludar.addEventListener("click", saludar);
botonCerrar.addEventListener("click", cerrarModal);
botonX.addEventListener("click", cerrarModal);

// Cerrar al hacer clic en el fondo oscuro
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        cerrarModal();
    }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && !modal.hidden) {
        cerrarModal();
    }
});
