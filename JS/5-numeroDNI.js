let DNI = prompt("Ingresá un número de DNI (entre 0 y 99999999):");

while (DNI !== null) {
  if (!isNaN(DNI) && DNI.trim() !== "") {
    let dni = Number(DNI);
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
