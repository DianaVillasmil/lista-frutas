var boton = document.getElementById("boton");
var lista = document.getElementById("lista");
var texto = document.getElementById("texto");

boton.addEventListener("click", agregarALista, false);

function agregarALista(evento){
	var txt = texto.value;
	var item = "<li>" + txt + "</li>";
	lista.innerHTML += item;
}