/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/
let resultado = 0;
let numero = prompt("Ingresá un número:");

while (numero !== null) {
  if (!isNaN(Number(numero)) && numero.trim() !== "") {
    resultado += Number(numero);
  } else {
    alert("Eso no es un número válido.");
  }

  numero = prompt("Ingresá otro número (o Cancelar para salir):");
}

alert("La suma de los números ingresados es: " + resultado);


