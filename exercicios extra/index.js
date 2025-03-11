/* 
0 - 11 (bom dia)
12 - 17 (boa tarde)
18 - 23 (boa noite)    
*/

const hora = 80

if (hora >= 0 && hora <= 11){
    console.log('Bom dia!');
}else if(hora >= 12 && hora <=17) {
    console.log('Boa tarde!');
}else if (hora >= 18 && hora <=23){
    console.log('Boa noite!');
} else {
    console.log('Hora inválida!');
}