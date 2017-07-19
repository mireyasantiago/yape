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

// funcion de materalixe para el carrusel
$(document).ready(function(){
      $('.carousel').carousel();
});


/* cuando se crean las validaciones, recordar que el evento submit se da
al formulario  no al boton*/
(function(){
  var validarTelefono= function(){

    $("#formulario").submit(validar);
  }

  var validar= function(e){
    var telefono= $("#telefono");
    var botonF= $("#boton");
    e.preventDefault(); //Evita la recarga de la paginas
    if(isNaN(telefono.val()) ) {
      botonF.attr('disabled', true);
        //return false;
    }
    else if(telefono.val().length < 9 || telefono.val().length < 1) {
      botonF.attr('disabled', true)
       //return false;
    }
    else{
      botonF.attr('disabled', false)
    }
  }
  $(document).ready(validarTelefono);
}());


        $('#boton_enviar').attr('disabled', true);
