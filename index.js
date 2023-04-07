
/*
let minhaVariavel;
console.log(minhaVariavel);
*/

/*
let a = 13;
let b = 5;
let resultado = a % b;
document.write(resultado);
*/

let peso = parseFloat(prompt("Digite o seu peso (em kg):"));
let altura = parseFloat(prompt("Digite a sua altura (em metros):"));

let imc = peso / (altura ** 2);

if (imc < 18.5) {
  alert("Seu IMC é " + imc.toFixed(2) + ", você está abaixo do peso ideal.");
} else if (imc >= 18.5 && imc <= 24.9) {
  alert("Seu IMC é " + imc.toFixed(2) + ", você está no peso ideal.");
} else {
  alert("Seu IMC é " + imc.toFixed(2) + ", você está acima do peso ideal.");
}
