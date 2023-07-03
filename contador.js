//ubicamos elementos donreo del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function control()
{
    //cremos objetos de fecha
    const ahora = new Date();
    const final = new Date(2024, 1, 16);
   

    //diferencia entre momentos de fecha
    let diferencia = final - ahora;
    /* el resultado de la deferencia 
       es un número expresado en
       milisegundos 
    */
     console.log(diferencia);

    //obtenemos la diferencia expresada en segundos
    let segundos = Math.trunc( diferencia/1000 );
        console.log( 'segundos: '+ segundos );

    //obtenemos la diferencia expresada en minutos
    let minutos = Math.trunc(segundos/60);
        console.log( 'minutos: '+ minutos );

    //obtenemos la diferencia expresada en horas
    let horas = Math.trunc( minutos/60 );
        console.log( 'horas: '+ horas );

    //obtenemos la diferencia expresada en días
    let dias = Math.trunc( horas/24 );
        console.log( 'dias: '+ dias );

    /*#### calculamos los módulos 
    - las horas restande de cada día
    - los minutos restantes de cada hora
    - los segundos restantes de cada minuto ###*/

    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;
    console.log( dias +' dias '+ horas +' horas '+ minutos + ' minutos ');

    /* agregamos 0 iniciales */
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (dias < 10) {
        dias = "0" + dias;
    }

    //imprimimos en los spans
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

control();
setInterval( control, 1000 );