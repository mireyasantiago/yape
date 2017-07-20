// funcion de materalixe para el carrusel
$(document).ready(function(){
      $('.carousel').carousel();
});

//para validar numero y checkbox
// se llama al elementos en variable global
var checkbox = $("#termino-condiccion");
var botonContinuar = $("#boton");
var formularioComienza = $("#formulario");
var numeroTelefono = $("#telefono");

var cargarPagina = function () {
// cuando se ejecuten los eventos se llaman a la funcion
  numeroTelefono.keyup(validarTelefono);
  checkbox.change(validarTelefono);//el evento change(cambio) solo funciona con:textarea,input y select

};

var validarTelefono = function (e) {
  e.preventDefault(); //para prevenir la recarga de la pagina
  var longitudTel= numeroTelefono.val().length;//con el metodo val devuelve el valor con length devuelve su longitud
  // el metodo prop recupera propiedades y valores de os elementos seleccionados
  /*para comprobar que parametro me comprobaba primero utilice el operador
  logico ternario || y asi ver cual se realizaba*/
  if ( longitudTel >=10 && checkbox.prop("checked")) {
    //console.log(checkbox.prop);
    // para retirar la clase disabled que esta en el html se utiliza removeClass
		botonContinuar.removeClass("disabled");
	}else{
		botonContinuar.addClass("disabled");
	}
};


/*area para trabajar en el api*/
/*
var api = function(){
	$.post('http://localhost:3000/api/registerNumber',{
		"phone": numeroTelefono,
		"terms": checkbox
	}).then(function(response){
		alert("sin error");
	}).catch(function(error){
		alert("con error");
	});
};
*/
/*
var api = {
  url:'http://localhost:3000/api/registerNumber'
}

var agregarTelefono = function(e){
  e.preventDefault();
//con este metodo se envian datos al servidor
  $.post(api.url[
//se utilizan las clases globales
    "phone": numeroTelefono,
    "terms": checkbox
  ]).then((resolve){
  console.log(resolve);
}).catch(function(error){
console.log(error);
});
}
*/




$(document).ready(cargarPagina);//cuando el documento carge se ejecutan las funciones
