/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’

*/

/*
usando arreglos:
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
              'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
              'C', 'K', 'E'];

let input = prompt("Ingresá un número de DNI (entre 0 y 99999999):");

while (input !== null) {
  if (!isNaN(input) && input.trim() !== "") {
    let dni = Number(input);

    if (dni >= 0 && dni <= 99999999) {
      let resto = dni % 23;
      let letra = letras[resto];
      alert("La letra del DNI es: " + letra);
    } else {
      alert("El número debe estar entre 0 y 99.999.999");
    }
  } else {
    alert("Eso no es un número válido");
  }

  input = prompt("Ingresá otro número de DNI (o Cancelar para salir):");
}

*/
let input = prompt("Ingresá un número de DNI (entre 0 y 99999999):");

while (input !== null) {
  if (!isNaN(input) && input.trim() !== "") {
    let dni = Number(input);
    if (dni >= 0 && dni <= 99999999) {
      let resto = dni % 23;
      let letra;
      if (resto === 0) letra = "T";
      else if (resto === 1) letra = "R";
      else if (resto === 2) letra = "W";
      else if (resto === 3) letra = "A";
      else if (resto === 4) letra = "G";
      else if (resto === 5) letra = "M";
      else if (resto === 6) letra = "Y";
      else if (resto === 7) letra = "F";
      else if (resto === 8) letra = "P";
      else if (resto === 9) letra = "D";
      else if (resto === 10) letra = "X";
      else if (resto === 11) letra = "B";
      else if (resto === 12) letra = "N";
      else if (resto === 13) letra = "J";
      else if (resto === 14) letra = "Z";
      else if (resto === 15) letra = "S";
      else if (resto === 16) letra = "Q";
      else if (resto === 17) letra = "V";
      else if (resto === 18) letra = "H";
      else if (resto === 19) letra = "L";
      else if (resto === 20) letra = "C";
      else if (resto === 21) letra = "K";
      else if (resto === 22) letra = "E";

      alert("La letra del DNI es: " + letra);
    } else {
      alert("El número debe estar entre 0 y 99.999.999");
    }
  } else {
    alert("Eso no es un número válido");
  }

  input = prompt("Ingresá otro número de DNI (o Cancelar para salir):");
}
