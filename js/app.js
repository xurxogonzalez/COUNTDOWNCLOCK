"use strict";

/** Funciones utilizadas
    getFullYear()
    getMonth()
    getDate()
    Math.floor()
    setInterval()
    clearInterval()
 */



/**
 * Objeto donde almacenar temporalmente los valores del contador hacia atrás del reloj
 */
const countDown = {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
}
/**
 * 
 * @param {Number} ms Microsegundos de una fecha
 */
const getRemainingTime = ms => {
    //1s = 1000ms
    //1m = 60s
    //1h = 60m
    //1d = 24h
    //Valores en ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    countDown.day = Math.floor(ms / oneDay);
    countDown.hour = Math.floor(ms % oneDay / oneHour);
    countDown.minute = Math.floor(ms % oneHour / oneMinute);
    countDown.second = Math.floor(ms % oneMinute / 1000);
    console.log(countDown)
}

//Arrays para formatear después los meses y días de la semana en el HTML
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const weekDay = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];



/**
 * new Date(años, meses, días, horas, segundos, microsegundos)
 * Donde en meses hay que tener en cuenta que el índice es 0, por tanto va del 0 a 11
 * Por tanto en new Date(2021, 9, 13, 0, 26) el 9 representa el mes de Octubre y no Septiembre
 */
const oldDate = new Date(2021, 9, 13, 0, 39);

//Obtenemos diferentes valores de la fecha
const year = oldDate.getFullYear();
let month = oldDate.getMonth();
month = months[month];
let day = oldDate.getDay();
day = weekDay[day];

//Preparamos la cadena a mostrar
const stringDate = `${day}, ${oldDate.getDate()} de ${month} de ${year} a las ${oldDate.getHours()}:${oldDate.getMinutes()} ${oldDate.getHours() > 12 ? 'pm' : 'am'}`;

//Seleccionamos el nodo del DOM para mostrar texto del contador hacia atrás
const subtitle = document.querySelector(".subtitle");
subtitle.textContent = stringDate;


/**
 * 
 * @param {Number} number 
 * @returns String Una cadena de dos caracteres. Si falta alguno lo rellena con un cerro
 * La sintaxis de str.padStart(tamaño [, cadena_con_la_que_hacer_padding])
 * Donde:
 * tamaño es el tamaño de la cadena resultante.
 * cadena_con_la_que_hacer_padding es " " (un espacio) por defecto.
 */
const format = number => number.toString().padStart(2, "0");


let interval = setInterval(
    () => {
        const currentDate = new Date();
        let dif = (oldDate - currentDate); //devuelve la diferencia de horas en milisegundos

        if (dif < 0)
            clearInterval(interval)
        else {
            getRemainingTime(dif);
            document.querySelector(".days strong").textContent = format(countDown.day);
            document.querySelector(".hours strong").textContent = format(countDown.hour);
            document.querySelector(".minutes strong").textContent = format(countDown.minute);
            document.querySelector(".seconds strong").textContent = format(countDown.second);
        }
    },
    1000
);