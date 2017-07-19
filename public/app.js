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
    e.preventDefault(); //Evita la recarga de la pagina
    if(isNaN(telefono.val())  ) {
      $(this).prop('disabled', false);
      //alert("Ingrese solo numeros y seleccione terminos");
      //  return false;
      //$("#formulario").removeClass("disabled");
    }
    else if(telefono.val().length < 9 || telefono.val().length===0) {
      $(this).prop('disabled', false);
      //alert("ingrese al menos 9 caracteres");
      //    return false;
    }
  /*  else{
      $("#formulario").addClass("disabled");
    }*/
  }



  $(document).ready(validarTelefono);
}());
