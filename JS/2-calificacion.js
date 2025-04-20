do {
    const numero = Number(prompt("Ingrese su calificación"));
  
    if (isNaN(numero)) {
      alert("Introduce un número válido.");
    } else if (numero < 0 || numero > 10) {
      alert("Número erróneo.");
    } else if (numero <= 2) {
      alert("Muy deficiente");
    } else if (numero <= 4) {
      alert("Insuficiente");
    } else if (numero <= 6) {
      alert("Suficiente");
    } else if (numero === 7) {
      alert("Bien");
    } else if (numero <= 9) {
      alert("Notable");
    } else if (numero === 10) {
      alert("Sobresaliente");
    }
  
  } while (confirm("¿Desea consultar otra calificación?"));
  