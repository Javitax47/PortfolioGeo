// Lista de prácticas disponibles
const practicasDisponibles = [
    "practica1.html",
    "practica3.html",
    "practica4.html",
    "practica7.html",
    "practica8.html",
    "practica9.html",
    "practica10.html",
];

// Obtener el archivo actual
const currentPage = window.location.pathname.split("/").pop();

// Obtener el índice de la práctica actual
const practicaIndex = practicasDisponibles.indexOf(currentPage);

// Elementos del DOM
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const nombrePracticaElement = document.getElementById("nombrePractica");
const h1Element = document.querySelector("#contenidoPractica h1");
const pElement = document.querySelector("#contenidoPractica p");

// Configurar botones de navegación
if (btnAnterior) {
    if (practicaIndex <= 0) {
        // Deshabilitar "Anterior" si estamos en la primera práctica
        btnAnterior.disabled = true;
    } else {
        // Configurar navegación a la práctica anterior
        btnAnterior.addEventListener("click", () => {
            window.location.href = practicasDisponibles[practicaIndex - 1];
        });
    }
}

if (btnSiguiente) {
    if (practicaIndex >= practicasDisponibles.length - 1) {
        // Deshabilitar "Siguiente" si estamos en la última práctica
        btnSiguiente.disabled = true;
    } else {
        // Configurar navegación a la práctica siguiente
        btnSiguiente.addEventListener("click", () => {
            window.location.href = practicasDisponibles[practicaIndex + 1];
        });
    }
}

// Configurar contenido dinámico
if (nombrePracticaElement) {
    const practicaNumero = currentPage
        .replace("practica", "")
        .replace(".html", "");
    nombrePracticaElement.innerText = `Práctica ${practicaNumero}`;
}

if (h1Element) {
    const practicaNumero = currentPage
        .replace("practica", "")
        .replace(".html", "");
    h1Element.innerText = `Práctica ${practicaNumero}`;
}

if (pElement) {
    const practicaNumero = currentPage
        .replace("practica", "")
        .replace(".html", "");
    pElement.innerText = `Contenido de la práctica ${practicaNumero}.`;
}

// Función para volver a la página de inicio
function goHome() {
    window.location.href = "../index.html";
}

// Función para descargar el guion
function descargarGuion() {
    const practicaNumero = currentPage
        .replace("practica", "")
        .replace(".html", "");
    const guionFile = `../guiones/practica${practicaNumero}.pdf`;

    const link = document.createElement("a");
    link.href = guionFile;
    link.download = `Guion_Practica_${practicaNumero}.pdf`;
    link.click();
}
