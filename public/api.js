/*
 para trabajar en la api es necesario saber y entender
 url: http//localhost:3000/api/registerNumber
 metodo http: POST --con este metodo se envian datos al servidor donde guardara
 data: {"phone":"...","terms": "..."}
*/

var terminos= $("#termino-condiccion");

var telefononum= $("#telefono");


/*area para trabajar en el api*/
$("#formulario").submit(function(){
	$.post('http://localhost:3000/api/registerNumber',{
		"phone": telefononum,
		"terms": terminos
	}).then(function(res){
		alert("sin error");
	}).catch(function(error){
		alert("con error");
	});
});
