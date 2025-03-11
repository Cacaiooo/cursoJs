/*
Caio Victor Lopes Serra tem 20 anos, pesa 70 kg
tem 1.81 de altura e seu IMC é de: 21.36686914318855
Caio Victor nasceu em 2004.
*/

const nome = 'Caio Victor';
const sobrenome = 'Lopes Serra';
const idade = 20;
const peso = 70;
const altura = 1.81;
let imc; // peso / (altura * altura)

imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de: ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)