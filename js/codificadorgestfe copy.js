
 import datagefe from '../json/datagefe.json' assert { type: 'json' };

 console.log(datagefe)
     // Generador de la consulta
    // document.querySelector('#btnGenerarBusquedaGe').addEventListener('click', actualizarB);



 $('[name="checks[]"]').click(function() { 
    let arr = $('[name="checks[]"]:checked').map(function(){
      return this.value;
    }).get();
    let str = arr.join(',');
    $('#arr').text(JSON.stringify(arr));
    $('#str').text(str);
    console.log(arr);
    let resNp = arr.reduce((a,b) => a+b);
    console.log(resNp)


    console.log(arr.includes('1')); //consulto si es verdara o falsa esta opcion
        //PROCESO FILTRO PM
    let consultaB1 = arr.includes('1')
        if(consultaB1 == true){
            console.log("convinacion0");
            const busqueda0 = datagefe.filter((cB) => (cB.id === 'convinacion0'))
            console.log(busqueda0);
            let mostrarInfo = busqueda0.map(function(info){
                return  ('<h3><b>Modelo Equipo: '+info.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info.adaptador +'</li>') ;    
            })
            console.log(mostrarInfo)
           document.getElementById("resultadoBusqueda1").innerHTML = mostrarInfo
        } else {
            console.log("No se encontro coincidencias con la selección")
            document.getElementById("resultadoBusqueda1").innerHTML = '<h3><b>No se encontraron coincidencias con la selección</b></h3>'
        }

                //filtro funcion completo
        let consultaB2 = resNp.startsWith(1891011121314);
        console.log(consultaB2)
        if(consultaB2 == true){
            const busqueda1 = datagefe.filter((cB1) => (cB1.id === resNp))
            console.log(busqueda1);
            let mostrarInfo1 = busqueda1.map(function(info1){
                return  ('<h3><b>Modelo Equipo: '+info1.modeloEquipo + '</b></h3>' + '<li>Código Equipo: ' + info1.codigoDeEquipo + '</li>' +'<li>Código Interfaz: ' + info1.codigoInterfaz +'</li>'+'<li>Código Adaptador: ' + info1.adaptador +'</li>') ;    
            })
            console.log(mostrarInfo1)
            document.getElementById("resultadoBusqueda2").innerHTML = mostrarInfo1
        }else {
            console.log("No se encontro coincidencias con la selección")
            document.getElementById("resultadoBusqueda2").innerHTML = '<h3><b>No se encontraron coincidencias con la selección</b></h3>'
        }
               
 
  });


