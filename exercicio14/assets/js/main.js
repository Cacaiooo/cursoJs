const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

var intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;

function formatar(num) {
    return String(num).padStart(2, '0');
  }

function contador(){
    if (!intervalo) { 
        intervalo = setInterval(showTime, 1000);
    }
}

function showTime() {
    segundos++

    if (segundos === 60) {
       segundos = 0;
       minutos++; 
    }
    if (minutos === 60) {
        minutos = 0;
        horas++
    }

    const horasCompletas = `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`
    relogio.innerHTML = horasCompletas;
}

function stopTime() {
    clearInterval(intervalo);
    intervalo = null;
}

function clearTime() {
    clearInterval(intervalo);
    intervalo = null;

    horas = 0;
    minutos = 0;
    segundos = 0;

    relogio.innerHTML = "00:00:00";
    
}


iniciar.addEventListener('click', function(e) {
    contador();
});

pausar.addEventListener('click', function(e) {
    stopTime();
});

zerar.addEventListener('click', function(e) {
    clearTime();
});