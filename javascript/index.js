window.onload = function () {
  // Declaración de variables
  let panelInfo = document.querySelector(".info");
  let retrocederComic = document.querySelector(".atras");
  let siguienteComic = document.querySelector(".siguiente");
  let sectionComics = document.querySelector(".comics");
  let buttonMostrarComic = document.querySelector(".btn-Acceder");
  let divBotonesPaginas = document.querySelector(".botones");
  let inicio = document.querySelector(".inicio");
  let comics = [
    document.querySelector(".comic1"),
    document.querySelector(".comic2"),
    document.querySelector(".comic3"),
  ];
  let currentComic = 0; // Empieza en la primera página

  // Valores fijos para mostrar/ocultar los contenedores
  const posicionPanelInfo = "-1000px";
  const posicionPanelComic = "0px";

  // Función para mostrar los comics tras pulsar en acceder
  buttonMostrarComic.addEventListener("click", mostrarComic);
  inicio.addEventListener("click", function () {
    ocultarComic();
  });

  // Muestra el cómic actual
  function mostrarComic() {
    panelInfo.style.top = posicionPanelInfo;
    sectionComics.style.top = posicionPanelComic;
    divBotonesPaginas.style.display = "flex";
    document.body.style.backgroundImage = "none";

    // Oculta todos los cómics
    for (let comic of comics) {
      comic.style.display = "none";
    }
    // Muestra el cómic actual
    comics[currentComic].style.display = "grid";
  }

  // Oculta el cómic
  function ocultarComic() {
    panelInfo.style.top = 0;
    sectionComics.style.top = "-1000px";
    divBotonesPaginas.style.display = "none";
    document.body.style.backgroundImage =
      "url('./imagenes/nietoAbueloPlaya.jpg')";
  }

  // Asignar escuchadores en una función autoinvocada
  (function () {
    retrocederComic.addEventListener("click", function () {
      if (currentComic > 0) {
        // Si no estamos en la primera página
        currentComic--; // Retrocede una página
        mostrarComic(); // Actualiza la vista
      }
    });
    siguienteComic.addEventListener("click", function () {
      if (currentComic < comics.length - 1) {
        // Si no estamos en la última página
        currentComic++; // Avanza una página
        mostrarComic(); // Actualiza la vista
      }
    });
  })();
};
