// Variáveis
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const button = document.getElementById("random");
const btnvalue1 = document.getElementById("btnvalue1")
const btnvalue2 = document.getElementById("btnvalue2")
const place1 = document.getElementById("place1")
const place2 = document.getElementById("place2")

// Funções
const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ";";
};

const setGradientkey = () => {
	body.style.background = `linear-gradient(to right, ${btn1.value}, ${btn2.value})`;
	css.textContent = body.style.background + ";";
};

const randomButton = () => {
	const conta1 = Math.floor(Math.random() * 100000000000000000);
	const conta2 = Math.floor(Math.random() * 100000000000000000);
	const btconta1 = "#" + ("000000" + conta1).slice(-6);
	const btconta2 = "#" + ("000000" + conta2).slice(-6);
	body.style.background = `linear-gradient(to right, ${btconta1}, ${btconta2})`;
	css.textContent = body.style.background + ";";
	btnvalue1.value = btconta1
	btnvalue2.value = btconta2
	place1.setAttribute("placeholder", btconta1)
	place2.setAttribute("placeholder", btconta2)
};

// Event Listeners
button.addEventListener("click", randomButton);
btn1.addEventListener("input", setGradientkey);
btn2.addEventListener("input", setGradientkey);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
