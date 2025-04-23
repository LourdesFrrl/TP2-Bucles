let texto = prompt("Ingrese un texto:");
let resultado = "";

for (let i = 0; i < texto.length; i++) {
  resultado += texto[i];
  if (i < texto.length - 1) {
    resultado += "-";
  }
}
document.writeln("Resultado: " + resultado);
