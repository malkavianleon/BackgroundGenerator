//variáveis

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var button = document.getElementById("random");

//funções

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
};

function setGradientkey() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ btn1.value 
	+ ", " 
	+ btn2.value 
	+ ")";

	css.textContent = body.style.background + ";";
};

function randomButton() {
	var conta1 = Math.floor(Math.random() * 100000000000000000)
	var conta2 = Math.floor(Math.random() * 100000000000000000)
	var btconta1 = "#" + ("000000" + conta1).slice(-6);
	var btconta2 = "#" + ("000000" + conta2).slice(-6);
	body.style.background =
	"linear-gradient(to right, " 
	+ btconta1 
	+ ", " 
	+ btconta2 
	+ ")";
	css.textContent = body.style.background + ";";
};

//code

button.addEventListener("click", randomButton);

btn1.addEventListener("input", setGradientkey);

btn2.addEventListener("input", setGradientkey);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

