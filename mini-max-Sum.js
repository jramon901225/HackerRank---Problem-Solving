/*
De un arreglo dado de 5 numeros, encuentra la suma minima sumando 4 y la suma maxima sumando 4 de los
valores, imprime los dos resultados en una sola linea, separada por un espacio
*/

/*
Pasos:

1.- ordenar el array de menor a mayor
2.- eliminar el primer elemento del array ordenado (slice o shift)
3.- realizar la suma de los elementos restantes(reduce)
4.- imprimir los dos resultados en una sola linea
*/

const arr = [7, 69, 2, 221, 8974];
//1
const sortedArr = arr.sort((a, b) => a - b);
//2
const minArr = sortedArr.slice(0, 4);
const maxArr = sortedArr.slice(1);
//3
const minValue = minArr.reduce((accum, curr) => accum + curr);
const maxValue = maxArr.reduce((accum, curr) => accum + curr);
//4
console.log(minValue, maxValue);
