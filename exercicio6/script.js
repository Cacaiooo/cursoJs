const numero = Number(prompt('Digite um número:' ));
const titleNumber = document.getElementById("titleNumber");
const texto = document.getElementById("texto");

titleNumber.innerHTML = numero;
texto.innerHTML = `raiz quadrada: ${numero ** 2} <br><br>`;
texto.innerHTML += `${numero} é Inteiro: ${Number.isInteger(numero)} <br><br>`;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)} <br><br>`;
texto.innerHTML += `A arredondando pra cima: ${Math.ceil(numero)} <br><br>`;
texto.innerHTML += `A arredondando pra baixo: ${Math.floor(numero)} <br><br>`;
texto.innerHTML += `Com 2 casas decimais: ${numero.toFixed(2)} <br><br>`;



