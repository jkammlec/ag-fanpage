document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-texto");

  if (contenedor) {
    // Contenedor para el texto oculto
    const textoMas = document.createElement("p");
    textoMas.id = "texto-adicional";
    // Clases de Bootstrap
    textoMas.className = "card-text small mt-2 d-none transition-fade"; 
    textoMas.innerHTML = `Atarashii Gakkō no Leaders adopta una filosofía de desafiar las normas de la sociedad japonesa. Posicionándose como las representantes de la juventud japonesa, el principio fundamental del grupo afirma: «En una época en la que solamente se reconoce a los ciudadanos ejemplares, nos esforzamos por desafiar a una sociedad de mente estrecha abrazando la individualidad y la libertad».`;

    // Botón "Leer más"
    const botonLeerMas = document.createElement("button");
    botonLeerMas.id = "btn-leer-mas";
    // Clases de Bootstrap para botón
    botonLeerMas.className = "btn btn-sm btn-outline-light mt-2";
    botonLeerMas.innerText = "Leer más";

    // Añadir a contenedor del HTML
    contenedor.appendChild(textoMas);
    contenedor.appendChild(botonLeerMas);

    // Event listener
    botonLeerMas.addEventListener("click", () => {
      // Si el texto está oculto (contiene d-none)
      if (textoMas.classList.contains("d-none")) {
        textoMas.classList.remove("d-none"); // Se muestra
        botonLeerMas.innerText = "Leer menos"; // Cambia el texto del botón
      } else {
        textoMas.classList.add("d-none"); // Se oculta
        botonLeerMas.innerText = "Leer más"; // Reestablece el botón
      }
    });
  }
});