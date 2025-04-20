 const edad = Number(prompt("Ingrese su edad"))
 if(!isNaN(edad)){
    if(edad >= 18){
        alert("ya puede conducir")
     }else{
        alert("No puedes conducir")
     }
}else{
    document.writeln("Ingresaste un valor invalido")
}

