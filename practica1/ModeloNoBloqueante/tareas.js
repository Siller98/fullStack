'use strict'

setTimeout(function() {
    console.log('Tarea 1');
}, 3000);

setTimeout(function() {
    console.log('Tarea 2');
}, 20000);

setTimeout(function() {
    console.log('Tarea 3');
}, 10000);

setTimeout(function() {
    console.log('Tarea 4');
}, 2000);

console.log("Tarea 5");
console.log(process.uptime());
console.log("Fin del programa");

