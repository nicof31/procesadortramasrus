
import data from '../json/data.json' assert { type: 'json' };

console.log(data)

    // Generador de la consulta
    document.querySelector('#btnGenerarBusqueda').addEventListener('click', actualizarB);
    

      function actualizarB () {

        let selectMarcaEje = document.getElementById('datosBusquedaMarcaEje');
        const marcaEje = selectMarcaEje.options[selectMarcaEje.selectedIndex].text;
            console.log(marcaEje);
            console.log ("------")

        let selectModeloEje = document.getElementById('datosBusquedaModeloEje');
        const modeloEje = selectModeloEje.options[selectModeloEje.selectedIndex].text;
          console.log(modeloEje);
          console.log ("------")
            
        let selectCantidadEje = document.getElementById('datosBusquedaCantidadEje');
        const cantidadEje = parseFloat(selectCantidadEje.options[selectCantidadEje.selectedIndex].text);
            console.log(cantidadEje);
            console.log ("------")  

        let selectMontajeNeumaticos = document.getElementById('datosBusquedaMontajeNeumaticos');
        const montajeNeumatico = selectMontajeNeumaticos.options[selectMontajeNeumaticos.selectedIndex].text;
            console.log(montajeNeumatico);
            console.log ("------")        
          
        let selectEjeDireccionales = document.getElementById('datosBusquedaEjesDireccionales');
        const ejeDireccionales = selectEjeDireccionales.options[selectEjeDireccionales.selectedIndex].text;
            console.log(ejeDireccionales);
             console.log ("------")        
                 
        let selectTipoSistema = document.getElementById('datosBusquedaTipoSistema');
        const tipoSistema = selectTipoSistema.options[selectTipoSistema.selectedIndex].text;
            console.log(tipoSistema);
            console.log ("------")        
            console.log (data)
   
       const consultaB = data.filter((cdB) => (cdB.marcaEje === marcaEje && cdB.modeloEje === modeloEje && cdB.cantidadEjes === cantidadEje  && cdB.montajeNeumaticos === montajeNeumatico && cdB.ejeDirrecionales === ejeDireccionales && cdB.tipoSistema === tipoSistema))
       console.log(consultaB);

        if (consultaB == ""){
            console.log("No se encontraron resultados, verificar los datos ingresados y repetir la búsquededa nuevamente")
            document.getElementById("resultadoBusquedaPp").innerHTML = ("No se encontraron resultados, verificar los datos ingresados y repetir la búsquededa nuevamente");
        } else{

            for (const resultadoBqB of consultaB) {
           console.log (resultadoBqB.codigoDeEquipo);
           document.getElementById("resultadoBusquedaPp").innerHTML = (resultadoBqB.codigoDeEquipo);
           document.getElementById("marcaEje").innerHTML = ("Marca Eje: " + consultaB[0].marcaEje);
           document.getElementById("modeloEje").innerHTML = ("Modelo Eje: " + consultaB[0].modeloEje);
           document.getElementById("ejePrepardoOrigen").innerHTML = ("Eje preparado en origen: " + consultaB[0].ejePrepardoOrigen);
           document.getElementById("montajeNeumaticos").innerHTML = ("Montaje Neumático: " + consultaB[0].montajeNeumaticos);
           document.getElementById("tipoMontaje").innerHTML = ("Tipo Montaje: " + consultaB[0].tipoMontaje);
           document.getElementById("materialLlanta").innerHTML = ("Material de la llanta: " + consultaB[0].materialLlanta);
           document.getElementById("desplazamiento").innerHTML = ("Desplazamiento: " + consultaB[0].desplazamiento);
           document.getElementById("ejeDirrecionales").innerHTML = ("Eje Dirrecionales: " + consultaB[0].ejeDirrecionales);
           document.getElementById("tipoSistema").innerHTML = ("Tipo de sistema: " + consultaB[0].tipoSistema);
    }
        }
        
    }