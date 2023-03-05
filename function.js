let profile = document.querySelector("#imageProfile");
profile.setAttribute("src", "Profileuser.png");

let botonApagado = document.querySelectorAll("i.bi.bi-circle");
let botonEncendido = document.querySelectorAll("i.bi.bi-circle-fill");
let colorDocumento = document.querySelector("link.tema");
let temaEstilo = colorDocumento.getAttribute('href');

let botonRedInactivo = document.querySelector(".colorRed i.bi.bi-circle");
let botonRedActivo = document.querySelector(".colorRed i.bi.bi-circle-fill");

let botonBlueInactivo = document.querySelector(".colorBlue i.bi.bi-circle");
let botonBlueActivo = document.querySelector(".colorBlue i.bi.bi-circle-fill");

let botonYellowInactivo = document.querySelector(".colorYellow i.bi.bi-circle");
let botonYellowActivo = document.querySelector(".colorYellow i.bi.bi-circle-fill");

var dropdownMenu = document.querySelector('.dropdown-menu');
var dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
	if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
		dropdownMenu.classList.remove('show');
	}
});

function mostrarPopup(nombre, imagen, funcion) {
	document.querySelector(".popup-contenido .popup-imagen").src = imagen;
	document.querySelector(".popup-contenido .popup-nombre").textContent = nombre;
	document.querySelector(".popup-contenido .popup-funcion").textContent = funcion;
	document.querySelector(".popup").style.display = "flex";
}

function cerrarPopup() {
	document.querySelector(".popup").style.display = "none";
}

function colorRed() {
	let hojaEstilo = colorDocumento.getAttribute('href');
	switch (hojaEstilo) {
		case 'style.css':
			colorDocumento.setAttribute('href', 'styleRed.css');
			botonRedInactivo.style.display = "none";
			botonRedActivo.style.display = "block";
			break;
		case 'styleBlue.css':
			colorDocumento.setAttribute('href', 'styleRed.css');
			botonRedInactivo.style.display = "none";
			botonRedActivo.style.display = "block";
			break;
		case 'styleYellow.css':
			colorDocumento.setAttribute('href', 'styleRed.css');
			botonRedInactivo.style.display = "none";
			botonRedActivo.style.display = "block";
			break;
		default:
			colorDocumento.setAttribute('href', 'style.css');
			botonRedInactivo.style.display = "block";
			botonRedActivo.style.display = "none";
			break;
	}

	botonBlueInactivo.style.display = "block";
	botonBlueActivo.style.display = "none";
	botonYellowInactivo.style.display = "block";
	botonYellowActivo.style.display = "none";
}

function colorBlue() {

	let hojaEstilo = colorDocumento.getAttribute('href');
	switch (hojaEstilo) {
		case 'style.css':
			colorDocumento.setAttribute('href', 'styleBlue.css');
			botonBlueInactivo.style.display = "none";
			botonBlueActivo.style.display = "block";
			break;
		case 'styleRed.css':
			colorDocumento.setAttribute('href', 'styleBlue.css');
			botonBlueInactivo.style.display = "none";
			botonBlueActivo.style.display = "block";
			break;
		case 'styleYellow.css':
			colorDocumento.setAttribute('href', 'styleBlue.css');
			botonBlueInactivo.style.display = "none";
			botonBlueActivo.style.display = "block";
			break;
		default:
			colorDocumento.setAttribute('href', 'style.css');
			botonBlueInactivo.style.display = "block";
			botonBlueActivo.style.display = "none";
			break;
	}
	botonRedInactivo.style.display = "block";
	botonRedActivo.style.display = "none";
	botonYellowInactivo.style.display = "block";
	botonYellowActivo.style.display = "none";
}

function colorYellow() {
	let hojaEstilo = colorDocumento.getAttribute('href');
	switch (hojaEstilo) {
		case 'style.css':
			colorDocumento.setAttribute('href', 'styleYellow.css');
			botonYellowInactivo.style.display = "none";
			botonYellowActivo.style.display = "block";
			break;
		case 'styleRed.css':
			colorDocumento.setAttribute('href', 'styleYellow.css');
			botonYellowInactivo.style.display = "none";
			botonYellowActivo.style.display = "block";
			break;
		case 'styleBlue.css':
			colorDocumento.setAttribute('href', 'styleYellow.css');
			botonYellowInactivo.style.display = "none";
			botonYellowActivo.style.display = "block";
			break;
		default:
			colorDocumento.setAttribute('href', 'style.css');
			botonYellowInactivo.style.display = "block";
			botonYellowActivo.style.display = "none";
			break;
	}
	botonRedInactivo.style.display = "block";
	botonRedActivo.style.display = "none";
	botonBlueInactivo.style.display = "block";
	botonBlueActivo.style.display = "none";
}



