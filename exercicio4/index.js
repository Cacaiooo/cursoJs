let varA = 'A';
let varB = 'B';
let varC = 'C';

TMP = varA
varA = varB
varB = varC
varC = TMP

console.log(varA, varB, varC);

// RESULTADO TEM QUE SAIR = B C A