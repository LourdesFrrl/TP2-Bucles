
const nombre1 = prompt("Ingrese el nombre de la primera persona:");
const edad1 = parseInt(prompt("Ingrese la edad de " + nombre1));

const nombre2 = prompt("Ingrese el nombre de la segunda persona:");
const edad2 = parseInt(prompt("Ingrese la edad de " + nombre2));

const nombre3 = prompt("Ingrese el nombre de la tercera persona:");
const edad3 = parseInt(prompt("Ingrese la edad de " + nombre3));

let edadMaxima = Math.max(edad1, edad2, edad3);

if (edadMaxima === edad1) {
  alert("El mayor es " + nombre1 + " con " + edad1 + " años.");
} else if (edadMaxima === edad2) {
  alert("El mayor es " + nombre2 + " con " + edad2 + " años.");
} else {
  alert("El mayor es " + nombre3 + " con " + edad3 + " años.");
}
