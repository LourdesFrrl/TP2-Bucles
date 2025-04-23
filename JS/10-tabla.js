let filas = parseInt(prompt("Ingrese el número de filas:"));
let columnas = parseInt(prompt("Ingrese el número de columnas:"));
let valorCelda = filas * columnas;

document.writeln(`<tbody><table>`);

for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.writeln(`<tr>`); 
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.writeln(`<td>${valorCelda--}</td>`); 
  }
  document.writeln(`</tr>`);
}

document.writeln(`</tbody></table>`);
