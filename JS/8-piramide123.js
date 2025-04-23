let numero = parseInt(prompt("Ingrese un número (máximo 50):"));

if (numero > 50) {
  alert("El número debe ser menor o igual a 50.");
} else {
  for (let i = 1; i <= numero; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    document.writeln("<br>", linea);
  }
}
