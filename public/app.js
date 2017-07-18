/*var api={
  url:"api/users.js" //ruta de la api
};

var cargarPagina = function(){
  cargarApi();
};

var cargarApi = function(){
  $.getJSON(api.url, function(datos){
    datos.forEach(cargarDatos);
  });
};

var cargarDatos= function(){
  $.getJSON(api.url, function(elementos){
    elementos.forEach(mostrar)
  });
};
*/
$(document).ready(function(){
      $('.carousel').carousel();
    });

    $(document).ready(function(){
          $('.carousel.carousel-slider').carousel({fullWidth: true});
        });
