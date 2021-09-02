function getClima() {

    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=231302b3ea3252b7e6c38e3ac5938fb2&lang=pt_br',
        dataType: 'json',
        success: function (data) {
            console.log (data.weather[0].description);

            
            let converterCelcius = (data.main.temp - 273.15);
            celsius = (Math.round(converterCelcius) + "C°")

            $('#temperatura').html(celsius);
            $('#condicao').html(data.weather[0].description);
            $('#velocidade').html(data.wind.speed+'m/s');
            $('#umidade').html(data.main.humidity+'%');
            $('#dia').html(data.sys.sunrise);
            $('#noite').html(data.sys.sunset);

            let icone = 'img/' + data.weather[0].icon + '.png';
            $('#i_condicao').attr('src',icone);

        },

        error: function (argument) {
            alert('Falha ao obter dados!');

        }
    });
}

window.onload = function () {

    getClima();

};