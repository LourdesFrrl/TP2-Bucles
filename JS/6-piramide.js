/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666

*/
for (let i = 1; i <= 30; i++) {  // Bucle para ir del 1 al 30
    let fila = "";  // Inicializamos una variable vacía para construir la fila
  
    // Añadimos el número `i` repetido `i` veces a la fila
    for (let j = 1; j <= i; j++) {
      fila += i;  // Concatenamos el número `i` a la variable `fila`
    }
  
    document.writeln(fila + "<br/>");  // Imprimimos la fila resultante
  }
  