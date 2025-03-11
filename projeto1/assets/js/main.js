function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    let imc = peso / (altura * altura);
    let classificacao = ""

    if (isNaN(peso) && isNaN(altura) ){
        resultado.textContent = "É necessário adicionar o peso e a altura!";
        resultado.classList.add("erro");
        return false;
    }
    
    if (isNaN(peso)) {
        resultado.textContent = "É necessário adicionar o peso!";
        resultado.classList.add("erro");
        return false;
    } else if (isNaN(altura)) {
        resultado.textContent = "É necessário adicionar uma altura!";
        resultado.classList.add("erro");
        return false;
    } else {
        document.getElementById("resultado").classList.remove("erro");
    }

    if (imc < 18.5){
        classificacao = "Abaixo do peso";
        resultado.classList.add("success");
    } else if (imc >= 18.5 && imc <= 24.9){
        classificacao = "Peso normal";
        resultado.classList.add("success");
    } else if (imc >= 25 && imc <= 29.9){
        classificacao = "Acima do peso";
        resultado.classList.add("success");
    }else if (imc >= 30 && imc <= 34.9){
        classificacao = "Obesidade grau I";
        resultado.classList.add("success");
    }else if (imc >= 35 && imc <= 39.9){
        classificacao = "Obesidade grau II";
        resultado.classList.add("success");
    } else if(imc > 40){
        classificacao = "Obesidade grau III";
        resultado.classList.add("success");
    } else {
        document.getElementById("resultado").classList.remove("success");
        document.getElementById("resultado").textContent = "Informações não válidas";
    }

    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + " || Classificação: " + classificacao;

}