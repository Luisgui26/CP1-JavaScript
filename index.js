
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
/*
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
*/
/*
let idade = parseInt(prompt("Digite a sua idade:"));

if (idade <= 12) {
  console.log("Você tem " + idade + " anos e é uma criança.");
} else if (idade >= 13 && idade <= 18) {
  console.log("Você tem " + idade + " anos e é um adolescente.");
} else if (idade >= 19 && idade <= 60) {
  console.log("Você tem " + idade + " anos e é um adulto.");
} else {
  console.log("Você tem " + idade + " anos e é um idoso.");
}
*/
/*
let nome = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");


if (nome === "admin" && senha === "1234") {
  document.write("Login realizado com sucesso!");
} else {
  document.write("Falha de autenticação. Nome de usuário ou senha incorretos.");
}
*/
/*
let notas = [];

for (let i = 1; i <= 7; i++) {
  let nota = parseFloat(prompt("Digite a nota " + i + ":"));
  notas.push(nota);
}

let media = notas.reduce((total, nota) => total + nota) / notas.length;

if (media >= 6) {
  document.write(`Parabéns, sua média foi ${media.toFixed(2)} e você foi aprovado!`);
} else {
  document.write(`Infelizmente sua média foi ${media.toFixed(2)} e você foi reprovado.`);
}
*/
/*
let nome = prompt("Qual é o seu nome?");
let idade = parseInt(prompt("Quantos anos você tem?"));
let curso = prompt("Qual é o seu curso?");
let ano = parseInt(prompt("Em que ano você está?"));

document.write("<p>Nome: " + nome + "</p>");
document.write("<p>Idade: " + idade + " anos</p>");
document.write("<p>Curso: " + curso + "</p>");
document.write("<p>Ano: " + ano + "º</p>");
*/

let frase = "O LUGAR VIRA TECNOLOGIA";
let novaFrase = frase.replace("LUGAR", "MUNDO");

document.write(novaFrase);
