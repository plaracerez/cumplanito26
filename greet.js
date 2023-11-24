document.addEventListener('DOMContentLoaded', function() {

  // Función para obtener parámetros de la URL
  function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
  }

  // Obtener el nombre de la URL
  var nombre = obtenerParametro("nombre");

  // Mostrar el nombre en el mensaje
  document.querySelector("#customGreet").innerHTML = "Holi, " + nombre;
});