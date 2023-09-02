/*
Crea una funcion que regrese el numero de veces que se repite el numero mas grande dentro del arreglo
*/

/*
Crea una variable de conteo
organiza el array de mayor a menor
compara si el numero siguiente es igual al actual
si es igual incrementa en 1 la variable de conteo
si es diferente retorna 

*/

const candles = [3,2,1,3];


const maxHeight = Math.max(...candles)
let counter = 0

for(let i = 0; i < candles.length; i++ ) {
    if(maxHeight === candles[i]) {
        counter++
    }
}

console.log(counter)
return counter

