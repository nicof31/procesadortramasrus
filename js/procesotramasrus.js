

//const tramaServidor = ">RUS08,140123000043-2356004-064364290001183002A10,19,01,036000001129,00000000,99.9;ID=75001237;#LOG:5DD0;*7D<";
//console.log(tramaServidor.length)

  // Generador del proceso
  document.querySelector('#btnProcesarTrama').addEventListener('click', actualizarB);

  function actualizarB () {

// Caoturo datos de la trama copiada en input
let tramaServidor = document.getElementById('tramaCopiada').value;
console.log(tramaServidor)


    if(tramaServidor.length == 109) {
    console.log("La trama es correcta para su proceso")

    verificacionRus = tramaServidor.substring(1, 6)

        //verifico que trama a procesar sea la correcta
    switch(verificacionRus){
        case "RUS08":
           
            let tramaPrimerParseo = tramaServidor.replace(/[<>]/g, ""); 
            let tramaSegundoParseo = tramaPrimerParseo.replace(/[;]/g, ","); 

            function dividirCadena(cadenaADividir,separador) {
                let arrayDeCadenas = cadenaADividir.split(separador);
                //document.write('<p>La cadena original es: "' + cadenaADividir + '"');
                //document.write('<br>El separador es: "' + separador + '"');
                //document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
            
                for (let i=0; i < arrayDeCadenas.length; i++) {
                //document.write(arrayDeCadenas[i] + " / ");
                //console.log(arrayDeCadenas)
                //console.log(arrayDeCadenas[1]) 
                let objetoResultadoParseo = {
                    tipoTrama: arrayDeCadenas[0],
                    datosPosicionEvento: arrayDeCadenas[1],
                    nivelSeñal: arrayDeCadenas[2],
                    idEvento: arrayDeCadenas[3],
                    datosPm: arrayDeCadenas[4],
                    idChofer: arrayDeCadenas[5],
                    sensorTemperatura: arrayDeCadenas[6],
                    ns: arrayDeCadenas[7],
                    numPkt: arrayDeCadenas[8],
                    crc: arrayDeCadenas[9],
                };
                console.log(objetoResultadoParseo); 

                        //--------------Datos PM: "imprsion de valores parseado en DOM" ------------
                        document.getElementById("datosPm").innerHTML= objetoResultadoParseo.datosPm

                        //DATOS FECHA/HORA/POSICION/VELOCIDAD/SEÑAL/ENTRADAS

                //-------------- pareseo fecha ------------
                let fechaParseo = arrayDeCadenas[1],
                dia = fechaParseo.substring(0, 2); 
                mes = fechaParseo.substring(2, 4);
                año = fechaParseo.substring(4, 6); 
                let fechaFinal = dia +"/"+ mes+"/"+año ; 
                //-------------- pareseo hora------------
                let horaParseo = arrayDeCadenas[1],
                hora = horaParseo.substring(6, 8); 
                minutos = horaParseo.substring(8, 10);
                segundos = horaParseo.substring(10, 12); 
                let horaFinal = hora +":"+ minutos+":"+segundos ; 
                //-------------- latitud------------
                let latitudParseo = arrayDeCadenas[1],
                latitud = latitudParseo.substring(12, 15); 
                latidudDos = latitudParseo.substring(15, 20); 
                let latitudFinal = latitud +"."+latidudDos ; 
                //-------------- longitud------------
                let longitudParseo = arrayDeCadenas[1],
                longitud = longitudParseo.substring(20, 24); 
                longitudDos = longitudParseo.substring(24, 29); 
                let longitudFinal = longitud +"."+longitudDos ; ; 
                //-------------- velocidad------------
                let velocidadParseo = arrayDeCadenas[1],
                velocidad = velocidadParseo.substring(29, 32); 
                let velocidadFinal = velocidad  ; 
                //--------------direccion ------------
                let direccionParseo = arrayDeCadenas[1],
                direccion = direccionParseo.substring(32, 35); 
                let direccionFinal = direccion  ; 
                //--------------posicion ------------
                let posicionParseo = arrayDeCadenas[1],
                posicion = posicionParseo.substring(35, 36); 
                let posicionFinal = posicion +"D" ; 
                //--------------edad ------------
                let edadParseo = arrayDeCadenas[1],
                edad = edadParseo.substring(36, 38); 
                let edadFinal = edad ; 
                //--------------entradas ------------
                let entradasParseo = arrayDeCadenas[1],
                entradas = entradasParseo.substring(38, 40); 
                let entradasFinal = entradas ; 
            
                //--------------Nro Evento ------------
                let numEventoParseo = arrayDeCadenas[1],
                numEvento = numEventoParseo.substring(40, 42); 
                let numEventoFinal = numEvento ; 
                
                        //DATOS PM
                //--------------temperatura ------------
                let temperaturaParseo = arrayDeCadenas[4],
                temperatura = temperaturaParseo.substring(0, 3); 
                let temperaturaFinal = temperatura ; 
            
                //--------------RPM Motor ------------
                let rpmMotorParseo = arrayDeCadenas[4],
                rpmMotor = rpmMotorParseo.substring(3, 7); 
                let rpmMotorFinal = rpmMotor ; 
                
                //--------------Sensor Aceite ------------
                let sensorAceiteParseo = arrayDeCadenas[4],
                sensorAceite = sensorAceiteParseo.substring(7, 8); 
                let sensorAceiteFinal = sensorAceite ; 
                
                //--------------Actuador ------------
                let actuadorParseo = arrayDeCadenas[4],
                actuador = actuadorParseo.substring(8, 9); 
                let actuadorFinal = actuador ; 
                
                //--------------Tensión Bateria ------------
                let tensionBateriaParseo = arrayDeCadenas[4],
                tensionBateria = tensionBateriaParseo.substring(9, 12); 
                let tensionBateriaFinal = tensionBateria ; 
                        
                        //PARSEO ENTRADAS HEX A BIN
                //-------------- conversion pareseo Entradas ------------

                let entradaProceso = entradasFinal;
                            //---paeseo valor entrada para su proceso---
                let entradaProcesoA = entradaProceso.substring(0, 1);
                let entradaProcesoB= entradaProceso.substring(1, 2);
                //console.log(entradaProcesoA);
                //console.log(entradaProcesoB);
                            //-- conversion de hexadecimal
                function convertirHexADec(hexadecimal) {
                if (hexadecimal.constructor != String) {
                    return null;
                }
                // 0-9, A-F, af -todas las posibles entradas-
                hexadecimal = hexadecimal.replace(/[^0-9A-Fa-f]/gi, '');
                return Number.parseInt(hexadecimal, 16);
                    }
                            //-- conversion entradaProcesoA
                    let conversionHdentradaA = convertirHexADec(entradaProcesoA)
                    //console.log(conversionHdentradaA)
                                //-- conversion de decimalbinario
                    let conversionBinariodEntradaA = conversionHdentradaA.toString(2);
                    //console.log(conversionBinariodEntradaA);

                                        //-- verifico length de trama EntradaA procesada y agrego el caracter que falta adelante  
                                        switch(conversionBinariodEntradaA.length){
                                            case 4:
                                                conversionBinariodEntradaA =  (conversionBinariodEntradaA).slice(0, 4);  
                                                break;
                                            case 3:  
                                                conversionBinariodEntradaA =  "0"+ (conversionBinariodEntradaA).slice(0, 3);  
                                                break;
                                            case 2:  
                                                conversionBinariodEntradaA =  "00"+ (conversionBinariodEntradaA).slice(0, 2);  
                                                break;
                                            case 1:  
                                                conversionBinariodEntradaA =  "000"+ (conversionBinariodEntradaA).slice(0, 1);  
                                            break;
                                            default:
                                                console.log("no hace falta completar");
                                            break;
                                        }
                                        //console.log(conversionBinariodEntradaA)

                            //-- conversion entradaProcesoB
                    let conversionHdentradaB = convertirHexADec(entradaProcesoB)
                    //console.log(conversionHdentradaB)
                                        //-- conversion de decimalbinario
                    let conversionBinariodEntradaB = conversionHdentradaB.toString(2);
                    //console.log(conversionBinariodEntradaB);
                                        //-- verifico length de trama EntradaA procesada y agrego el caracter que falta adelante  
                                        switch(conversionBinariodEntradaB.length){
                                            case 4:
                                                conversionBinariodEntradaB =  (conversionBinariodEntradaB).slice(0, 4);  
                                                break;
                                            case 3:  
                                                conversionBinariodEntradaB =  "0"+ (conversionBinariodEntradaB).slice(0, 3);  
                                                break;
                                            case 2:  
                                                conversionBinariodEntradaB =  "00"+ (conversionBinariodEntradaB).slice(0, 2);  
                                                break;
                                            case 1:  
                                                conversionBinariodEntradaB =  "000"+ (conversionBinariodEntradaB).slice(0, 1);  
                                            break;
                                            default:
                                                console.log("no hace falta completar");
                                            break;
                                        }
                                        //console.log(conversionBinariodEntradaB);
                            
                            //-- Parseo final entradaA + entradaB    
                    let entradasBinario =  conversionBinariodEntradaA + conversionBinariodEntradaB        

                
                //--------------Compilacion Objeto Final ------------
                let compilacionObjetoFinal = {
                    tipoTrama: arrayDeCadenas[0],
                    fecha: fechaFinal,
                    hora: horaFinal,
                    latitud: latitudFinal,
                    longitud: longitudFinal,
                    velocidad: velocidadFinal,
                    direccion: direccionFinal,
                    posicion: posicionFinal,
                    edadDato: edadFinal,
                    entradas: entradasFinal,
                    nroEvento: numEventoFinal,
                    nivelSeñal: arrayDeCadenas[2],
                    idEvento: arrayDeCadenas[3],
                    temperatura: temperaturaFinal,
                    rpmMotor: rpmMotorFinal,
                    sensorAceite: sensorAceiteFinal,
                    actuador: actuadorFinal,
                    tensionBateria: tensionBateriaFinal,
                    idChofer: arrayDeCadenas[5],
                    sensorTemperatura: arrayDeCadenas[6],
                    ns: arrayDeCadenas[7],
                    numPkt: arrayDeCadenas[8],
                    crc: arrayDeCadenas[9],
                    entradasBinario: entradasBinario,
                    entradaIgnicion: entradasBinario[0],
                    entradaAlimentacionPrincipal: entradasBinario[1],
                    entradaIn5:entradasBinario[2],
                    entradaIn4:entradasBinario[3],
                    entradaIn3:entradasBinario[4],
                    entradaIn2:entradasBinario[5],
                    entradaIn1:entradasBinario[6],
                    entradaIn1:entradasBinario[7],
                };
                console.log(compilacionObjetoFinal) ;
                console.log(compilacionObjetoFinal.temperatura)
                
                             //--------------Datos PM: "impresion de valores procesados en DOM" ------------
                                     //--------------Dato Temeperatura: proceso para impresion DOM" ------------
                                    document.getElementById("dTempPm").innerHTML= (' '+ compilacionObjetoFinal.temperatura + ' °C');  ;

                            //--------------Dato Aceite: proceso para impresion DOM" ------------

                            switch(compilacionObjetoFinal.sensorAceite){
                                case "0":
                                    document.getElementById("dAceitePm").innerHTML= (' '+ compilacionObjetoFinal.sensorAceite + ' Motor en marcha');  
                                    break;
                                case "1":  
                                    document.getElementById("dAceitePm").innerHTML= (' '+ compilacionObjetoFinal.sensorAceite + ' Motor apagado'); 
                                break;
                                default:
                                    document.getElementById("dAceitePm").innerHTML="Sin datos"; 
                                break;
                            }
                            //--------------Dato RPM: proceso para impresion DOM" ------------
                            document.getElementById("dRpmPm").innerHTML= compilacionObjetoFinal.rpmMotor;

                            //--------------Dato Bateria: proceso para impresion DOM" ------------
                            document.getElementById("dBateriaPm").innerHTML= (' '+ '+ ' + compilacionObjetoFinal.tensionBateria.slice(0, 2)+'.'+ compilacionObjetoFinal.tensionBateria.slice(2,3) + '');

                            

                }
            }

            let coma = ",";
            dividirCadena(tramaSegundoParseo, coma);
            
           

            break;  
            default:
                console.log("La trama no se puede procesar no esta incluida en la base de comparaciones informar a ingenieria");
            break;
}

} else {
    console.log("la trama no esta completa, verificar que se haya copiado ><, si la trama esta bien copiada consultar con tecnica/ingenieria")
}


  }
    //borra los datos de la selección
    document.getElementById('btnBorrarDatosProceso').onclick = function() {
        location.reload()
        actualizarB ();
    }


 
