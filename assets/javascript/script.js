function recuperarData() {
// selecionando os elementos html nescessários
    let divClock = document.querySelector('#clock');
    let divData = document.querySelector('#data');


    // criando objeto date
    let data = new Date();

    // declarando variáveis para o horário
    let hora = data.getHours().toString();
    let minuto = data.getMinutes().toString();
    let segundo = data.getSeconds().toString();
    let diaSemana = data.getDay().toString();
    let diaMes = data.getDate().toString();
    let mes = data.getMonth().toString();
    let ano = data.getFullYear().toString();
    let periodo // variável será usada para armezar o valor PM ou AM
    
// formatando hora para AM ou PM
    hora = Number(hora);
    //atribuindo valor a periodo
    periodo = hora >= 12 ? 'PM' : 'AM'; 

    // formatando hora para dois turnos de 12 horas
    if (hora == 0) {
        hora = 12;
    } else if (hora > 12) {

        hora = hora - 12;
    };
    hora = hora.toString();

// formatando horário para dois dígitos
    if (hora.length < 2) {
        hora = `0${hora}`;
    };
    if (minuto.length < 2) {
        minuto = `0${minuto}`;
    };
    if (segundo.length < 2) {
        segundo = `0${segundo}`;
    };
    
// formatando dia da semana
    switch (diaSemana) {
        case '0':
            diaSemana = 'Domingo';
            break;
        case '1':
            diaSemana = 'Segunda-feira';
            break;
        case '2':
            diaSemana = 'Terça-feira';
            break;
        case '3':
            diaSemana = 'Quarta-feira';
            break;
        case '4':
            diaSemana = 'Quinta-feira';
            break;
        case '5':
            diaSemana = 'Sexta-feira';
            break;
        case '6':
            diaSemana = 'Sábado';
            break;
    };
    
// formatando dia do mês
    switch (mes) {
        case '0':
            mes = 'Janeiro';
            break;
        case '1':
            mes = 'Fevereiro';
            break;
        case '2':
            mes = 'Março';
            break;
        case '3':
            mes = 'Abril';
            break;
        case '4':
            mes = 'Maio';
            break;
        case '5':
            mes = 'Junho';
            break;
        case '6':
            mes = 'Julho';
            break;
        case '7':
            mes = 'Agosto';
            break;
        case '8':
            mes = 'Setembro';
            break;
        case '9':
            mes = 'Outubro';
            break;
        case '10':
            mes = 'Novembro';
            break;
        case '11':
            mes = 'Dezembro';
            break;
    };

    // exibindo hora na página html
    divClock.innerHTML = `${hora} : ${minuto} : ${segundo} ${periodo}`;
    divData.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano}`;
    
};

setInterval(recuperarData, 1000);