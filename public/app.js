

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
  // botonF.attr('disabled',true);
    botonF.addClass('disabled');
     //return false;
  }
  else{
  botonF.removeClass('disabled');
  //  return true;
  }
}

$(document).ready(validarTelefono);
