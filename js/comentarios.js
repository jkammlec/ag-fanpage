function agregarComentario(event) {
          event.preventDefault(); // Evitamos que la página se recargue

          const nombre = document.getElementById("nombreComentario").value;
          const comentario = document.getElementById("textoComentario").value;
          const contenedor = document.getElementById("contenedorComentarios");

          //Si es el primer comentario, se borra el mensaje de "Aún no hay comentarios"
          const sinComentarios = document.getElementById("sinComentarios");
          if (contenedor.contains(sinComentarios) || contenedor.innerHTML.includes("Aún no hay comentarios")) {
              contenedor.innerHTML = "";
          }

          //Estructura HTML del comentario con clases de Bootstrap
          const nuevoDiv = document.createElement("div");
          nuevoDiv.className = "card bg-light p-3 mb-2 rounded-3 border-0 shadow-sm";
          nuevoDiv.innerHTML = `
              <p class="mb-1"><strong>${nombre}</strong> <span class="text-muted small">hace un momento</span></p>
              <p class="mb-0 text-muted small">${comentario}</p>
          `;

          //Se añade al principio de la lista de comentarios
          contenedor.insertBefore(nuevoDiv, contenedor.firstChild);

          //Limpiar formulario
          document.getElementById("formComentario").reset();
      }