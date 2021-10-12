"use strict";
/**
    getFullYear()
    getMonth()
    getDate()
    Math.floor()
    setInterval()
    clearInterval()
 */

function secondsFormat(s) {
    const countDown = {
        day:0,
        hour: 0,
        minute: 0,
        second: 0
    }
    countDown.day = Math.floor (s / (24 * 3600)); // Math.floor () redondea hacia abajo o trunca 
    countDown.hour = Math.floor( (s - countDown.day*24*3600) / 3600); 
    countDown.minute = Math.floor( (s - countDown.day*24*3600 - countDown.hour*3600) /60 ); 
    countDown.second = s - countDown.day*24*3600 - countDown.hour*3600 - countDown.minute*60; 
    countDown.second = Math.floor(countDown.second);
    return countDown;
}


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const diaNum = Number(document.querySelector(".dia").textContent);

const mes = document.querySelector(".mes").innerHTML.toLowerCase();
const keyMesNum = meses.findIndex(m=>m.toLowerCase()===mes);

const anhoNum = Number(document.querySelector(".anho").textContent);

let hora = document.querySelector(".hora").textContent;
console.log(hora.split(":"))

const fecha1 = new Date(anhoNum,keyMesNum,diaNum,Number(hora.split(":")[0]),Number(hora.split(":")[1]));





setInterval(
    function(){ 
        const fecha2 = new Date();
        let dif = (fecha1-fecha2)/1000; //devuelve la diferencia de horas en milisegundos
        //console.log(secondsFormat(dif))
        const datos = secondsFormat(dif);
        document.querySelector(".days strong").textContent=datos.day;
        document.querySelector(".hours strong").textContent=datos.hour;
        document.querySelector(".minutes strong").textContent=datos.minute;
        document.querySelector(".seconds strong").textContent=datos.second;
     },
    1000
);

// const dia = new Date().getDate();
// const mes = new Date().getMonth();
// const anho = new Date().getFullYear();
// console.log(mes)