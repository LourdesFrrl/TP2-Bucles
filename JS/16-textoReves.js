let texto = prompt("Ingrese un texto:");
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}
document.writeln("Texto al reves: " + textoInvertido);
