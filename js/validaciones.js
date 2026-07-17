document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const nombreVal = document.getElementById('nombre').value.trim();
    const correoVal = document.getElementById('correo').value.trim();
    const mensajeVal = document.getElementById('mensaje').value.trim();
    const contenedorAlerta = document.getElementById('contenedorAlerta');
    
    contenedorAlerta.innerHTML = '';

    // Validamos que los campos obligatorios no estén vacíos
    if (nombreVal === '' || correoVal === '' || mensajeVal === '') {
        mostrarAlerta('Por favor, completa todos los campos requeridos.', 'danger');
        return;
    }

    // 1. Validar nombre
    if (!validarNombre(nombreVal)) {
        mostrarAlerta('El nombre solo debe contener letras y espacios (mínimo 2 caracteres).', 'danger');
        return;
    }

    // 2. Validar correo electrónico
    if (!validarCorreo(correoVal)) {
        mostrarAlerta('Por favor, ingresa un correo electrónico válido.', 'danger');
        return;
    }

    // 3. Validar selección de género
    if (!validarGeneroSeleccionado()) {
        mostrarAlerta('Por favor, selecciona una opción de género.', 'danger');
        return;
    }

    // Si todo pasa con éxito
    mostrarAlerta('¡Formulario validado con éxito! Enviando tu mensaje...', 'success');

});

function validarNombre(nombre) {
    const expresionNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
    return expresionNombre.test(nombre);
}

function validarCorreo(correo) {
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionCorreo.test(correo);
}

function validarGeneroSeleccionado() {
    const radiosGenero = document.getElementsByName('genero');
    let seleccionado = false;

    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            seleccionado = true;
            break;
        }
    }
    return seleccionado;
}

function mostrarAlerta(mensaje, tipo) {
    const contenedorAlerta = document.getElementById('contenedorAlerta');
    contenedorAlerta.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}