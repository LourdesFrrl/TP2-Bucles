const texto = prompt("Ingrese un texto:");
let contador = 0;
const vocales = "aeiou";

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contador++;
  }
}
document.writeln("El texto tiene " + contador + " vocal(es).");
