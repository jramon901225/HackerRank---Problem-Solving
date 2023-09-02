/*
Convertir el sting de hora formato AM/PM a horas Militar(24hrs)
*/

const time = "12:01:00PM";

let [hours, minute, seconds] = time.split(":");

if (hours === "12") {
    hours = "00";
}

if (seconds.includes("PM")) {
    hours = parseInt(hours, 10) + 12;
}

const sec = seconds.slice(0, -2);

console.log( ` ${hours}:${minute}:${sec}`)


