for (let i = 1; i <= 500; i++) {
    let numero = i;
    if (i % 4 === 0) {
     numero += " (Múltiplo de 4)";
    }
    if (i % 9 === 0) {
     numero += " (Múltiplo de 9)";
    }
    document.writeln("<br>", numero);
     if (i % 5 === 0) {
        document.writeln("————————————————————-");
    }
  }
  