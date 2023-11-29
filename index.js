// Array de nombres
const nombresArray = [
  ["Agus", "Agus"],
  ["Br1", "Brunito"],
  ["Cari", "Carmen"],
  ["Cata", "Cata"],
  ["Eli", "Eli"],
  ["Elisit", "Elisi"],
  ["Emi", "Emi"],
  ["Fede", "Fede"],
  ["Fiamma", "Fiams"],
  ["Flor F", "Flor"],
  ["Flor S", "Flor"],
  ["Isma", "Ismuchis"],
  ["José", "Jos"],
  ["Juan", "Juancito chiquito"],
  ["Laure", "Laura"],
  ["Lucas", "Lucas bebé"],
  ["Ludubra", "Ludubra"],
  ["Mamá", "mamucha"],
  ["Marquis", "Marquis"],
  ["Mateo", "Mateo"],
  ["Miqueos", "Miqs"],
  ["Paulina M", "Pauli"],
  ["Paulina S", "Pau"],
  ["Sí hay dos Paulinas","kjj por que entraba acá"],
  ["Seba", "Seba"],
  ["Tati", "Tati"],
  ["Vale", "Vale"]
];


function enviarFormulario() {
  // Obtener el nombre seleccionado
  var nombreSeleccionado = document.getElementById("seleccionNombres").value;

  // Verificar si la opción seleccionada es "Sí hay dos Paulinas"
  if (nombreSeleccionado === "Sí hay dos Paulinas") {
      alert("Uy te comiste un payaso 🤡");
  } else {
      // Redirigir a la página principal con el nombre como parámetro
      window.location.href = "greet.html?nombre=" + nombreSeleccionado;
  }
}

/*function enviarFormulario() {
  // Obtener el nombre seleccionado
  var nombreSeleccionado = document.getElementById("seleccionNombres").value;

  // Redirigir a la página principal con el nombre como parámetro
  window.location.href = "greet.html?nombre=" + nombreSeleccionado;
}*/



document.addEventListener('DOMContentLoaded', function() {

  // Seleccionar el elemento select
  const selectNombres = document.getElementById('seleccionNombres');

  // Recorrer el array de nombres y crear las opciones
  nombresArray.forEach(function(nombre) {
      let option = document.createElement('option');
      option.value = nombre[1];
      option.textContent = nombre[0];
      selectNombres.appendChild(option);
  });
});
