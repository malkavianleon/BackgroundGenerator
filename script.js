// Variáveis
const header = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradientContainer = document.getElementById("gradient");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const button = document.getElementById("random");
const btnvalue1 = document.getElementById("btnvalue1");
const btnvalue2 = document.getElementById("btnvalue2");
const place1 = document.getElementById("place1");
const place2 = document.getElementById("place2");

// Funções
const setGradient = () => {
  gradientContainer.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  header.textContent = gradientContainer.style.background + ";";
};

const setGradientKey = () => {
  gradientContainer.style.background = `linear-gradient(to right, ${btn1.value}, ${btn2.value})`;
  header.textContent = gradientContainer.style.background + ";";
  place1.setAttribute("placeholder", btn1.value);
};

const randomButton = () => {
  const conta1 = Math.floor(Math.random() * 100000000000000000);
  const conta2 = Math.floor(Math.random() * 100000000000000000);
  const btconta1 = "#" + ("000000" + conta1).slice(-6);
  const btconta2 = "#" + ("000000" + conta2).slice(-6);
  gradientContainer.style.background = `linear-gradient(to right, ${btconta1}, ${btconta2})`;
  header.textContent = gradientContainer.style.background + ";";
  btnvalue1.value = btconta1;
  btnvalue2.value = btconta2;
  place1.setAttribute("placeholder", btconta1);
  place2.setAttribute("placeholder", btconta2);
};

// Event Listeners
button.addEventListener("click", randomButton);
btn1.addEventListener("input", setGradientKey);
btn2.addEventListener("input", setGradientKey);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
