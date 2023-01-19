
 import datagefe from '../json/datagefe.json' assert { type: 'json' };

 console.log(datagefe)
     // Generador de la consulta
   document.querySelector('#btnGenerarBusquedaGe').addEventListener('click', generarBusqueda);


function generarBusqueda (){
 
    let arr = $('[name="checks[]"]:checked').map(function(){
      return this.value;
    }).get();
    let str = arr.join(',');
    $('#arr').text(JSON.stringify(arr));
    $('#str').text(str);
    console.log(arr);
    let resNp = arr.reduce((a,b) => a+b);
    console.log(resNp)

    let consultaB1 = resNp;
    switch (consultaB1) {
      case '1':
      case '14':   

            let conmb1 = 'combinacion1'
            const busqueda0 = datagefe.filter((cB) => (cB.id === conmb1))
            console.log(busqueda0);
            let mostrarInfo = busqueda0.map(function(info){
                return  ('<h3><b>Modelo Equipo: '+info.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info.adaptador +'</li>') ;    
            })
            console.log(mostrarInfo)
            document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo
        break;

      case '1891011121314':
      case '11011':
      case '181011':
      case '191011':
      case '1101112': 
      case '1101113': 
      case '1101114': 
      case '1891011':
      case '18101112': 
      case '18101113':
      case '18101114':
      case '189101112':  
      case '18910111213':    
      case '19101112':
      case '1910111213':
      case '191011121314':      
      case '189101113':
      case '19101114':
      case '110111214':
      case '110111314': 
      case '189101114': 
      case '18910111214': 
      case '11011121314': 
      case '1810111214': 
      case '1910111214': 
      case '1810111314': 
      case '18910111314': 
      case '1910111314': 
      case '19101113': 
      case '181011121314': 
      case '8101112': 
      case '9101112': 
      case '10111213': 
      case '10111214': 
      case '89101112': 
      case '8910111213': 
      case '810111214': 
      case '81011121314': 
      case '810111214': 
      case '8910111214': 
      case '91011121314': 
      case '910111314': 
      case '9101114': 
      case '89101114': 
      case '8910111314': 
      case '110111213': 
      case '1810111213':
         


            let conmb2 = 'combinacion2'
            const busqueda1 = datagefe.filter((cB1) => (cB1.id === conmb2))
            console.log(busqueda1);
            let mostrarInfo1 = busqueda1.map(function(info1){
                return  ('<h3><b>Modelo Equipo: '+info1.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info1.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info1.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info1.adaptador +'</li>') ;    
            })
            console.log(mostrarInfo1)
            document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo1
        break;

        case '110': 
        case '1810': 
        case '18910': 
        case '1891012':
        case '189101213':
        case '18910121314':
        case '181012':
        case '181013':
        case '181014':
        case '191012':
        case '19101213':
        case '1910121314':
        case '1891013':
        case '11012':           
        case '1101213':           
        case '1101214':         
        case '110121314':         
        case '11013':
        case '1101314':
        case '110121314':
        case '1910121314':
        case '1910121314':
        case '1810121314':
        case '18101213':
        case '19101314':
        case '191014':
        case '191013':
        case '1891014':
        case '189101314':
        case '18101314':
        case '1910':
        case '11014':
        case '18101214':
        case '19101214':
        case '1410':
        case '14810':
        case '148910':
        case '14891012':
        case '1489101213':
        case '148910121314':
        case '14910':
        case '1491012':
        case '149101213':
        case '14910121314':
        case '141012':
        case '14101213':
        case '1410121314':
        case '14810121314':
        case '141013':
        case '14101314':
        case '149101314':
        case '1489101314':
        case '148101314':
        case '141014':      
        case '1491014':  
        case '14891014':  
        case '1489101214':  
        case '1481012':  
        case '148101213':  
        case '148101214':  
        case '1481014':  
        case '149101214':  
        case '1481013': 
        case '14101214': 

              let conmb3 = 'combinacion3'
              const busqueda2 = datagefe.filter((cB2) => (cB2.id === conmb3))
              console.log(busqueda2);
              let mostrarInfo2 = busqueda2.map(function(info2){
                  return  ('<h3><b>Modelo Equipo: '+info2.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info2.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info2.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info2.adaptador +'</li>') ;    
              })
              console.log(mostrarInfo2)
              document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo2
          break;

        case '1210':
        case '12810':    
        case '128910':
        case '12910':
        case '12310':
        case '123910':    
        case '1238910': 
        case '123810': 
        case '1310': 
        case '13910': 
        case '138910': 
        case '13810': 

                  let conmb4 = 'combinacion4'
                  const busqueda3 = datagefe.filter((cB3) => (cB3.id === conmb4))
                  console.log(busqueda3);
                  let mostrarInfo3 = busqueda3.map(function(info3){
                      return  ('<h3><b>Modelo Equipo: '+info3.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info3.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info3.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info3.adaptador +'</li>') ;    
                  })
                  console.log(mostrarInfo3)
                  document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo3
              break;

        case '111': 
        case '1811': 
        case '18911': 
        case '1891112':
        case '189111213':
        case '18911121314':
        case '181112':
        case '181113':
        case '181114':
        case '191112':
        case '19111213':
        case '1911121314':
        case '1891113':
        case '11112':           
        case '1111213':           
        case '1111214':         
        case '111121314':         
        case '11113':
        case '1111314':
        case '111121314':
        case '1911121314':
        case '1911121314':
        case '1811121314':
        case '18111213':
        case '19111314':
        case '191114':
        case '191113':
        case '1891114':
        case '189111314':
        case '18111314':
        case '1911':
        case '11114':
        case '18111214':
        case '19111214':
        case '1411':
        case '14811':
        case '148911':
        case '14891112':
        case '1489111213':
        case '148911121314':
        case '14911':
        case '1491112':
        case '149111213':
        case '14911121314':
        case '141112':
        case '14111213':
        case '1411121314':
        case '14811121314':
        case '141113':
        case '14111314':
        case '149111314':
        case '1489111314':
        case '148111314':
        case '141114':      
        case '1491114':  
        case '14891114':  
        case '1489111214':  
        case '1481112':  
        case '148111213':  
        case '148111214':  
        case '1481114':  
        case '149111214': 
        case '1481113': 
        case '14111214': 

                let conmb5 = 'combinacion5'
                  const busqueda4 = datagefe.filter((cB4) => (cB4.id === conmb5))
                  console.log(busqueda4);
                  let mostrarInfo4 = busqueda4.map(function(info4){
                      return  ('<h3><b>Modelo Equipo: '+info4.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info4.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info4.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info4.adaptador +'</li>') ;    
                  })
                  console.log(mostrarInfo4)
                  document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo4
              break;


        case '4': 
      
                let conmb6 = 'combinacion6'
                const busqueda5 = datagefe.filter((cB5) => (cB5.id === conmb6))
                console.log(busqueda5);
                let mostrarInfo5 = busqueda5.map(function(info5){
                     return  ('<h3><b>Modelo Equipo: '+info5.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info5.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info5.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info5.adaptador +'</li>') ;    
                  })
                  console.log(mostrarInfo5)
                  document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo5
              break;

    
            case '148':
            case '1489':
            case '148912':
            case '14891213':
            case '1489121314':
            case '149':
            case '14912':
            case '1491213':
            case '149121314':
            case '1412':
            case '141213':
            case '14121314':
            case '148121314':
            case '1413':
            case '141314':
            case '1491314':
            case '14891314':
            case '1481314':
            case '1414':      
            case '14914':  
            case '148914':  
            case '14891214':  
            case '14812':  
            case '1481213':  
            case '1481214':  
            case '14814':  
            case '1491214':  
            case '14813': 
            case '141214': 

                let conmb7 = 'combinacion7'
                const busqueda6 = datagefe.filter((cB6) => (cB6.id === conmb7))
                console.log(busqueda6);
                let mostrarInfo6 = busqueda6.map(function(info6){
                     return  ('<h3><b>Modelo Equipo: '+info6.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info6.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info6.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info6.adaptador +'</li>') ;    
                  })
                  console.log(mostrarInfo6)
                  document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo6
              break;

            case '6':
                case '689':
                case '68912':
                case '6891213':
                case '689121314':
                case '69':
                case '6912':
                case '691213':
                case '69121314':
                case '612':
                case '61213':
                case '6121314':
                case '68121314':
                case '613':
                case '61314':
                case '691314':
                case '6891314':
                case '681314':
                case '614':      
                case '6914':  
                case '68914':  
                case '6891214':  
                case '6812':  
                case '681213':  
                case '681214':  
                case '6814':  
                case '691214':  
                case '6813': 
                case '61214':
                case '46':
                case '468':
                case '4689':
                case '468912':
                case '46891213':
                case '4689121314':
                case '469':
                case '46912':
                case '4691213':
                case '469121314':
                case '4612':
                case '461213':
                case '46121314':
                case '468121314':
                case '4613':
                case '461314':
                case '4691314':
                case '46891314':
                case '4681314':
                case '4614':      
                case '46914':  
                case '468914':  
                case '46891214':  
                case '46812':  
                case '4681213':  
                case '4681214':  
                case '46814':  
                case '4691214':  
                case '46813': 
                case '461214': 
    
                    let conmb8 = 'combinacion8'
                    const busqueda7 = datagefe.filter((cB7) => (cB7.id === conmb8))
                    console.log(busqueda7);
                    let mostrarInfo7 = busqueda7.map(function(info7){
                         return  ('<h3><b>Modelo Equipo: '+info7.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info7.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info7.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info7.adaptador +'</li>') ;    
                      })
                      console.log(mostrarInfo7)
                      document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo7
                  break;
    



              


      case '':
      default:
        console.log('seleccionar algun elemento');
    }

}



  






/* anda
        //PROCESO FILTRO PM
    let consultaB1 = resNp.startsWith(1)
        if(consultaB1 === true){
            const busqueda0 = datagefe.filter((cB) => (cB.id === resNp))
            console.log(busqueda0);
            let mostrarInfo = busqueda0.map(function(info){
                return  ('<h3><b>Modelo Equipo: '+info.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info.adaptador +'</li>') ;    
            })
            console.log(mostrarInfo)
           document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo
        } else {         

                //filtro funcion completo
        let consultaB2 = resNp.startsWith(1891011121314) && resNp.startsWith(11011) ;
        console.log(consultaB2)
        if(consultaB2 === true){
            const busqueda1 = datagefe.filter((cB1) => (cB1.id === resNp))
            console.log(busqueda1);
            let mostrarInfo1 = busqueda1.map(function(info1){
                return  ('<h3><b>Modelo Equipo: '+info1.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info1.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info1.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info1.adaptador +'</li>') ;    
            })
            console.log(mostrarInfo1)
            document.getElementById("resultadoBusqueda2").innerHTML = mostrarInfo1
        }
        else {
            console.log("No se encontro coincidencias con la selección")
            document.getElementById("resultadoBusqueda2").innerHTML = '<h3><b>No se encontraron coincidencias con la selección</b></h3>'
        }
    }
  };
*/

       //borra los datos de la selección
       document.getElementById('btnBorrarDatosBusquedaGe').onclick = function() {
        let options = document.querySelectorAll('#resultadoBusqueda1');
        options.forEach(o => o.remove());
        location.reload()
    }
    
