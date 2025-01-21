// Prácticas disponibles
const practicasDisponibles = [1, 3, 4, 7, 8, 9, 10];

// Obtener el número de la práctica desde la URL
const params = new URLSearchParams(window.location.search);
const numero = parseInt(params.get('numero'), 10) || 1;
const totalPracticas = practicasDisponibles.length;

// Configuración inicial de contenido y navegación
const practicaIndex = practicasDisponibles.indexOf(numero); // Posición de la práctica en el array

// Mostrar contenido dinámico
const nombrePracticaElement = document.getElementById('nombrePractica');
if (nombrePracticaElement) {
    nombrePracticaElement.innerText = `Práctica ${numero}`;
}

const h1Element = document.querySelector('#contenidoPractica h1');
if (h1Element) {
    h1Element.innerText = `Práctica ${numero}`;
}

const pElement = document.querySelector('#contenidoPractica p');
if (pElement) {
    pElement.innerText = `Contenido de la práctica ${numero}.`;
}


// Configurar botones de navegación
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');

if (practicaIndex <= 0) {
    btnAnterior.disabled = true; // Deshabilitar "Anterior" en la primera práctica
}

if (practicaIndex >= totalPracticas - 1) {
    btnSiguiente.disabled = true; // Deshabilitar "Siguiente" en la última práctica
}

function navigate(step) {
    if ((practicaIndex + step >= 0) && (practicaIndex + step < totalPracticas)) {
        const newNumero = practicasDisponibles[practicaIndex + step];
        window.location.href = `practica.html?numero=${newNumero}`;
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// Descargar guion
function descargarGuion() {
    const link = document.createElement('a');
    link.href = `guiones/practica${numero}.pdf`;
    link.download = `Practica${numero}_Guion.pdf`;
    link.click();
}