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

