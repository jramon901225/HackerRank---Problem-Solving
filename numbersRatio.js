/*
Encuentra los numeros positivos, negativos y neutros, agrupalos y calcula el ratio dividiendo entre
la longitud del arr
*/

const arr = [-4, 3, -9, 0, 4, 1];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const num of arr) {
    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

const positiveRatio = (positiveCount / arr.length).toFixed(6);
const negativeRatio = (negativeCount / arr.length).toFixed(6);
const zeroRatio = (zeroCount / arr.length).toFixed(6);

console.log(positiveRatio);
console.log(negativeRatio);
console.log(zeroRatio);
