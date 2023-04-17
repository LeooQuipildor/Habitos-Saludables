document.addEventListener("keyup", function(e) {
  if (e.target.matches("#buscadorArticulos")) {
    let articulos = document.querySelectorAll(".card");
    let resultadosEncontrados = false;

    for (let i = 0; i < articulos.length; i++) {
      let minusculas = articulos[i];
      if (minusculas.textContent.toLowerCase().includes(e.target.value)) {
        minusculas.classList.remove("filtro");
        resultadosEncontrados = true;
      } else {
        minusculas.classList.add("filtro");
      }
    }

    let seccionArticulos = document.getElementById("noArticle");
    if (!resultadosEncontrados) {
      let mensaje = document.createElement("p");
      mensaje.textContent = "No se encontraron artículos.";
      mensaje.id = "mensajeNoArticle";
      seccionArticulos.innerHTML = "";
      seccionArticulos.appendChild(mensaje);
    } else {
      let mensaje = document.getElementById("mensajeNoArticle");
      if (mensaje) {
        seccionArticulos.innerHTML = "";
      }
    }
  }
});

function mostrarModal() {
  let modal = new bootstrap.Modal(document.getElementById("miModal"));
  modal.show();
}
setTimeout(mostrarModal, 4000);


let formulario = document.getElementById("formComentario");
let mostrarComentarios = document.getElementById("mostrarComentarios");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let comentario = document.getElementById("comentario").value;
    let nuevoComentario = document.createElement("li");
    nuevoComentario.textContent = `${nombre}: ${comentario}`;

    mostrarComentarios.appendChild(nuevoComentario);

    formulario.reset();
});