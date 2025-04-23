let numero = parseInt(prompt("Ingrese un número (máximo 50):"));

if (numero > 50) {
  alert("El número debe ser menor o igual a 50.");
} else {
  for (let i = numero; i >= 1; i--) {
    let linea = "";
    for (let j = 0; j < i; j++) {
      linea += i;
    }
    document.writeln("<br>", linea);
  }
}
