
// creo la clase alumno con su constructor para cargar los datos de ellos, también la funcion promedio alumno dentro de ella para que calcule su prom

class Alumno {
  constructor(nombre, apellido, dni, nota1, nota2) {   //propiedades de cada alumno, también puse dni como propiedad para tener una clave única de cada alumno, en mi caso para eliminar de la lista 
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.dni = dni;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  promedioAlumno() {                                      // método de la clase alumno para calcular su promedio en base a las notas que tuvo en cada bimestre
    let promedio = parseFloat((this.nota1 + this.nota2) / 2);
    return promedio;
  }
}

// creo una lista vacía para ir cargando los alumnos que voy creando con el bucle do while, solamente 6 puse porque sino se hace eterno

const listaAlumnos = [];
const cantidadAlumnos = 6;
let contador = 0;

do {
  let nombre = prompt("Ingrese el nombre del alumno:");
  let apellido = prompt("Ingrese su apellido:");
  let dni = prompt("Ingrese su DNI:");
  let nota1 = parseFloat(prompt("Ingrese la nota 1 del alumno:"));
  let nota2 = parseFloat(prompt("Ingrese la nota 2 del alumno:"));

  const alumno = new Alumno(nombre, apellido, dni, nota1, nota2);
  listaAlumnos.push(alumno);

  contador++;
} while (contador < cantidadAlumnos);

console.log("Lista de Alumnos:");
listaAlumnos.forEach((alumno, index) => {
  console.log(`Alumno ${index + 1}: ${alumno.nombre} ${alumno.apellido} (DNI: ${alumno.dni}) - Nota 1: ${alumno.nota1}, Nota 2: ${alumno.nota2}, Promedio: ${alumno.promedioAlumno()}`);
});

// Función para eliminar un alumno de la lista por su DNI, ya que siempre es conveniendo buscar una clave única para eliminar un campo de un registro y que mejor que su dni

function eliminarAlumnoPorDNI(dni) {
  const index = listaAlumnos.findIndex(alumno => alumno.dni === dni);              //uso el método find en el array
  if (index !== -1) {
    listaAlumnos.splice(index, 1);                                                 // uso el método splice de array para eliminar 
    console.log(`Alumno con DNI ${dni} eliminado.`);
  } else {
    console.log(`No se encontró ningún alumno con el DNI ${dni}.`);
  }
}

// Solicitar al usuario que ingrese el DNI del alumno a eliminar
let dniAEliminar = prompt("Ingrese el DNI del alumno que desea eliminar:");

// Llamar a la función eliminarAlumnoPorDNI con el DNI proporcionado por el usuario
eliminarAlumnoPorDNI(dniAEliminar);

// Imprimir la lista actualizada de alumnos
console.log("Lista de Alumnos actualizada:");
listaAlumnos.forEach((alumno, index) => {
  console.log(`Alumno ${index + 1}: ${alumno.nombre} ${alumno.apellido} (DNI: ${alumno.dni}) - Nota 1: ${alumno.nota1}, Nota 2: ${alumno.nota2}, Promedio: ${alumno.promedioAlumno()}`);
});

// Seleccionar el elemento div donde se agregarán los alumnos
const divAlumnos = document.querySelector('.alumno');

// Generar el HTML de la lista de alumnos con sus promedios
let htmlAlumnos = '';
listaAlumnos.forEach(alumno => {
  const promedio = alumno.promedioAlumno();
  const colorClase = promedio >= 6 ? 'aprobado' : 'desaprobado';
  htmlAlumnos += `<div class="nota ${colorClase}">${alumno.nombre} ${alumno.apellido} - Promedio: ${promedio}</div>`;
});

// Agregar el HTML generado al div de alumnos
divAlumnos.innerHTML = htmlAlumnos;