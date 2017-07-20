/* para trabajar en la api

 url: http//localhost:3000/api/registerNumber
 metodo http: POST
 data: {"phone":"...","terms": "..."}

// COMO FUNCIONA EL api
// Para cualquier peticion asincronoa son tres cosas principales: la url (el endpoint):
// http://localhost:3000/api/registerNumber --> ek puerto depende de si levantamos dos o no
// lo segundo es saber qué metodo utiliza la url: get, post delete.
// Post: siginifica que le metodo http es post, depende lo que diga el api.
// Lo tercero es que DATA se necesita, que información se necesita enviar en cada request.
// el req.body tiene toda la data que necesitamos, toda la data que se nvia se envia a traves de un json, es decir, a través de un objetos
// {"phone":"...","terms":"..."}los valores son los input en el phone y el check en termino y condiciones
// form-urlencoded.

 $.post(url, data(siempre es un objeto) y callbacks)
// Deferred object son las promesas de jquery
//
// $.post( url, {
//   "phone":"455354",
//   "terms":true
// }).then(function(response){
//   console.log(response)
// }).catch(function(error){
//   console.log(error)
// });

var cargarPagina = function(){
	Api();
};

var Api = function(){
	$.post('http://localhost:3000/api/registerNumber',{
		"phone":"+51986161136",
		"terms":true
	}).then(function(response){
		console.log(response);
	}).catch(function(error){
		console.log(error);
	});
};
$(document).ready(cargarPagina);





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
