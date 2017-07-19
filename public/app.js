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

var validarTelefono= function(){
  var formulario= $("#formulario");
  formulario.submit(validar);
}

var validar= function(e){
  var telefono= $("#telefono");
  var botonF= $("#boton");
  var longitudTel= telefono.val().length;
  e.preventDefault(); //Evita la recarga de la paginas
   if( longitudTel <= 9 ) {
    botonF.addClass('disabled');
     //return false;
  }
  else{
  botonF.removeClass('disabled');
  //  return true;
  }
}

$(document).ready(validarTelefono);
