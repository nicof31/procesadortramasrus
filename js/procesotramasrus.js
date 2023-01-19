

function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    document.write('<p>La cadena original es: "' + cadenaADividir + '"');
    document.write('<br>El separador es: "' + separador + '"');
    document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
 
    for (var i=0; i < arrayDeCadenas.length; i++) {
       document.write(arrayDeCadenas[i] + " / ");
       console.log(arrayDeCadenas)
       console.log("-------------------")
    }


    
 }
 
 var cadenaVerso = "Oh brave new world that has such people in it.";
 var cadenaMeses = ">RUS08,140123000043-2356004-064364290001183004A10,19,01,036000001129,00000000,99.9;ID=75001237;#LOG:5DD0;*7D<";
 
 var espacio = " ";
 var coma = ",";
 var puntoComa = ";";
 var menor = "<";
 var mayor = ">";
 
 dividirCadena(cadenaVerso, espacio);
 dividirCadena(cadenaVerso);
 dividirCadena(cadenaMeses, coma);
 dividirCadena(cadenaMeses, puntoComa);
 dividirCadena(cadenaMeses, menor);
 dividirCadena(cadenaMeses, mayor);

 
