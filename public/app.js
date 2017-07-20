

// funcion de materalixe para el carrusel

$(document).ready(function(){
      $('.carousel').carousel();
});


var cargarPagina = function () {
  $numeroTelefono.keyup(validarTelefono);
  $checkbox.change(validarTelefono);
  $formularioComienza.submit(validarTelefono);
};
//para validar numero y checkbox
var $checkbox = $("#termino-condiccion");// se llama al elementos en variable global
var $botonContinuar = $("#boton");
var $formularioComienza = $("#formulario");
var $numeroTelefono = $("#telefono");


$numeroTelefono.keyup(validarTelefono);
$checkbox.change(validarTelefono);

function validarTelefono() {
	var $longitudTel = $numeroTelefono.val().length;
	if ($longitudTel == 10 && $checkbox.prop("checked")) {
    console.log(checked);
		$botonContinuar.removeClass("disabled");
	}else{
		$botonContinuar.addClass("disabled");
	}
};

$(document).ready(cargarPagina);

/*
var cargarPagina = function () {
    numeroTelefono.keyup(validarTelefono);
    checkbox.click(validarTelefono);

};


var validarTelefono = function () {
    //condiciones para que se habilite el boton
    if (checkbox.prop("checked") == true && numeroTelefono.val().trim().length == 10) {
        botonContinuar.removeAttr("disabled");
    } else if (checkbox.prop("checked") == false && $(this).val().trim().length != 10) {
        botonContinuar.attr("disabled", true);
    }
};

$(document).ready(cargarPagina);
*/




















/*

var cargarPagina = function(){
  $("#numero").keyup(validarNumero);
  $("#formNumero").submit(agregarNumero)
};

var validarNumero = function() {
  var $numero = $("#numero");
  var $boton = $("#btnNumero");
  if($numero.val().length === 10 ){
      validarCheckbox(); //valida el checkbox ANTES modificar el input
      $("#terminos").click(validarCheckbox); //valida el checkbox DESPUES modificar input y hacer click en el ckecbox
   } else {
     $boton.attr("disabled", true);
  }
};

var validarCheckbox = function(){
  var $boton = $("#btnNumero");
  var $checkbox = $("#terminos");
  //Con el método .prop() se obtiene el valor de la propiedad checked con jquery
  if($checkbox.prop("checked")){
      $boton.removeAttr("disabled");
   } else {
     $boton.attr("disabled", true);
  }
};

var agregarNumero = function(e){
  e.preventDefault();
  var telefono = $("#numero").val();
  var terminos = $("#terminos").prop("checked");

  $.post("http://localhost:3000/api/registerNumber",{
    "phone": telefono,
    "terms": terminos
  }).then(function(res){
    console.log(res);
     if(res.message === "Usuario válido"){
       var codigo = res.data.code.toString();
        swal( codigo ,"Codigo de validación","success")
        $(document).on("click",$(".confirm")[0],redireccionarPag)
    } else {
      swal(res.message , "Ingresa otro número :)", "error");
    }
  }).catch(function(error){
    console.log(error);
  })
};

var redireccionarPag = function(){
  location.href = "codigo.html";
}
$(document).ready(cargarPagina);
*/
