alert("fsdvgdsfv");

var cargarDatos= function(){
  usuario.keyup(validarUsuario);
  email.keyup(validarUsuario);
  claveUsuario.keyup(validarUsuario);
}


var formularioDos= $("#formularioDatos");
var usuario= $("#nombre").val();
var email= $("#correoElectronico").val();
var claveUsuario= $("#clave").val();
var botonDos= $("#botonDatos");


var validarUsuario = function(){
  if(usuario.length <=0 && email.length != 0 && claveUsuario.length <= 8){
    botonDos.removeClass('disabled');
  }else{
    botonDos.addClass('disabled');
  }

}

$(document).ready(cargarDatos);
