$('#idFormulario').on('submit',function(e){   

  e.preventDefault();

  var lugar = $('#l4').val();
  var latitud = $('#latitud').val();
  var longitud = $('#longitud').val();
  var dormitorio = $('#dormitorio').val();
  var baño = $('#baño').val();
  var superficie = $('#superficie').val();

  var datos = {
    data: [{ 
        l4: lugar,
        lat: latitud,
        lon: longitud,
        bedrooms: dormitorio,
        bathrooms: baño,
        surface_total: superficie  
    }]
  };

  //console.log(datos);

 // robin var url = "https://go.rapidminer.com/am/api/deployments/18a8626d-6452-44f9-baad-2133d4ed6972";
  //mio
  var url = "https://go.rapidminer.com/am/api/deployments/553230c1-ff80-4c82-98d7-82df819d68e8";
$.ajax({
    type: "POST",
    data: JSON.stringify(datos),
    url: url,
    contentType: "application/json"
}).done(function(res) {       
    
    $.each(res.data, function(index,value){
      $.each(value, function (index, data) {
        if (index == "prediction(price)") {
          var precio = Math.floor(data);
          $('#algoritmo').text('Algoritmo: Gradient Boosted Trees');
          $('#correlacion').text('Correlación: 0.698');
          $('#errorRelativoPromedio').text('Error Relativo Promedio: 23.21');
           $('#errorAbsolutoPromedio').text('Error Absoluto Promedio: 22905.21');
           $('#errorMediaCuadrado').text('Error de la Media de la Raiz al Cuadrado: 30852.694');
          $('#label').text('Vivienda valorada en:');
          $('#prediccion').text(precio); 
        }
        
      })
    });

    //var newData = res.data;

    //for (var key in newData) {
    //var obj = newData[key];
    //alert(obj);
    //}

    //var newData = res.data;

    //var obja = JSON.stringify(newData);

    //console.log(coche);

    //alert(newData.values());


  });

});


