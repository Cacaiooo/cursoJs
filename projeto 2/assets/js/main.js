    const mostrarData = document.querySelector('.container h1'); 
    const data = new Date();

    function getDayOfWeek(dayOfWeek) {
        let nomeDia = "";

        if (dayOfWeek === 0) {
            nomeDia = "Domingo";
        } else if (dayOfWeek === 1) {
            nomeDia = "Segunda-Feira";
        } else if (dayOfWeek === 2) {
            nomeDia = "Terça-Feira";
        } else if (dayOfWeek === 3) {
            nomeDia = "Quarta-Feira";
        } else if (dayOfWeek === 4) {
            nomeDia = "Quinta-Feira";
        } else if (dayOfWeek === 5) {
            nomeDia = "Sexta-Feira";
        } else if (dayOfWeek === 6) {
            nomeDia = "Sábado";
        } 
            return nomeDia;
        }   

    function getMonthName(dayOfMonth) {
        let nomeMes = "";

        if (dayOfMonth === 0) { 
            nomeMes = "Janeiro";
        } else if (dayOfMonth === 1) {
            nomeMes = "Fevereiro";
        } else if (dayOfMonth === 2) {
            nomeMes = "Março";
        } else if (dayOfMonth === 3) {
            nomeMes = "Abril";
        } else if (dayOfMonth === 4) {
            nomeMes = "Maio";
        } else if (dayOfMonth === 5) {
            nomeMes = "Junho";
        } else if (dayOfMonth === 6) {
            nomeMes = "Julho";
        } else if (dayOfMonth === 7) {
            nomeMes = "Agosto";
        } else if (dayOfMonth === 8) {
            nomeMes = "Setembro";
        } else if (dayOfMonth === 9) {
            nomeMes = "Outubro";
        } else if (dayOfMonth === 10) {
            nomeMes = "Novembro";
        } else if (dayOfMonth === 11) {
            nomeMes = "Dezembro";
        } return nomeMes;  
    }

    function createDate(data) {
        const dayOfWeek = data.getDay();
        const dayOfMonth = data.getMonth();

        const dayName = getDayOfWeek(dayOfWeek);
        const monthName = getMonthName(dayOfMonth);

        const minutos = data.getMinutes();

        const minutosFormados = minutos >= 10 ? minutos : `0${minutos}`;

        return `${dayName}, ${dayOfMonth} de ${monthName} de ${data.getFullYear()} ${data.getHours()}:${minutosFormados}`
    }


mostrarData.innerHTML = createDate(data);

    