let resultado = "";
let texto = prompt("Ingresá una cadena de texto:");

if (texto !== null) {
  resultado += texto;
}

while (confirm("¿Querés ingresar otra cadena?")) {
  texto = prompt("Ingresá otra cadena:");
  resultado += "-" + texto;
}

alert("Cadenas concatenadas: " + resultado);
