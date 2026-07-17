document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-texto");

  if (contenedor) {
    // 1. Creamos el contenedor para el texto que se revelará
    const textoMas = document.createElement("p");
    textoMas.id = "texto-adicional";
    // Usamos fs-7 (o una fuente muy pequeña) en móviles para que quepa bien dentro de la foto
    textoMas.className = "card-text mt-2 d-none fw-normal text-light"; 
    textoMas.style.fontSize = "0.85rem"; // Forzamos un tamaño de letra seguro para celular
    textoMas.style.maxWidth = "550px";
    textoMas.innerHTML = `Atarashii Gakkō no Leaders adopta una filosofía de desafíar las normas de la sociedad japonesa. Posicionandose como las representantes de la juventud japonesa, el principio fundamental del grupo afirma: «En una época en la que solamente se reconoce a los ciudadanos ejemplares, nos esforzamos por desafiar a una sociedad de mente estrecha abrazando la individualidad y la libertad».`;

    // 2. Creamos el botón "Leer más"
    const botonLeerMas = document.createElement("button");
    botonLeerMas.id = "btn-leer-mas";
    botonLeerMas.className = "btn btn-sm btn-outline-light mt-2 px-3 py-1";
    botonLeerMas.innerText = "Leer más";

    // 3. Los inyectamos en el contenedor (primero el botón, luego el texto)
    contenedor.appendChild(botonLeerMas);
    contenedor.appendChild(textoMas);

    // 4. Añadimos el evento click para alternar la visibilidad
    botonLeerMas.addEventListener("click", () => {
      if (textoMas.classList.contains("d-none")) {
        textoMas.classList.remove("d-none");
        botonLeerMas.innerText = "Leer menos";
      } else {
        textoMas.classList.add("d-none");
        botonLeerMas.innerText = "Leer más";
      }
    });
  }
});