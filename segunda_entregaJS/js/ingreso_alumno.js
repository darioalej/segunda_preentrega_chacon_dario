const listadoAlumnos = [];
const cantidad = 10;

// Ciclo para ingresar nombres de alumnos
do {
  let entrada = prompt("Ingrese el nombre y apellido del alumno:");
  listadoAlumnos.push(entrada.toUpperCase());
  console.log(listadoAlumnos.length);
} while (listadoAlumnos.length !== cantidad);

console.log(listadoAlumnos.join("\n"));

// Función para eliminar un alumno de la lista
const eliminarAlumno = (nombre) => {
  let index = listadoAlumnos.indexOf(nombre.toUpperCase()); // Convertir el nombre a mayúsculas para comparación

  if (index !== -1) {
    listadoAlumnos.splice(index, 1);
    console.log(`Alumno "${nombre}" eliminado.`);
  } else {
    console.log(`Alumno "${nombre}" no encontrado.`);
  }
};

// Solicitar al usuario que ingrese el nombre del alumno a eliminar
let nombreAEliminar = prompt("Ingrese el nombre del alumno que desea eliminar:");

eliminarAlumno(nombreAEliminar); // Llamar a la función eliminarAlumno con el nombre proporcionado por el usuario

// Imprimir la lista actualizada sin el nombre del alumno eliminado
console.log("Lista de alumnos actualizada:");
console.log(listadoAlumnos.join("\n"));