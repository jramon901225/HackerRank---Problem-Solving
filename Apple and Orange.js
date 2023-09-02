/*
countApplesAndOranges has the following parameter(s):

s: Punto inicial de la casa de sam.
t: Punto final de la casa de sam.
a: Localizacion del arbol de manzanas.
b: Localizacion del arbol de naranjas.
apples: arreglo, distancia a la que cada manzana cae del arbol.
oranges: arreglo, distancia a la que cada naranja cae del arreglo

Input Format
La primera linea contiene dos enteros separados,que denotan los valores despectivos de S y T .
La segunda linea contiene dos enteros separados,que denotan los valores despectivos de a y b.
La tercera  linea contiene dos enteros separados,que denotan los valores despectivos de m y n .
La cuarta linea contiene m enteros,denotando las distancias respectivas de cada manzana que cae del punto a.
La quinta linea contiene n enteros,denotando las distancias respectivas de cada naranja que cae del punto b.
*/

/*
Pasos para resolver:

encontrar el valor de cada manzana respecto a su arbol [x]
encontrar el valor de cada naranja respecto a su arbol [x]
calcular que manzanas calleron en el rango de s y t[]
calcular que naranjas calleron en el rango de s y t[]
imprimir el numero de manzanas que calleron en el rango entre s y t[]
imprimir el numero de naranjas que calleron en el rango entre s y t[]

*/

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const m = 3;
const n = 2;
const apples = [-2, 2, 1];
const oranges = [5, -6]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // for Apples
    let validApples = []

    for(let i = 0; i < apples.length; i++) {
    
        if(a + apples[i]  >= s && a + apples[i]  <= t) {
           validApples.push(apples[i] + a)
        }       
    }

    //for Oranges
    let validOranges = []

    for(let i = 0; i < oranges.length; i++) {

        if(b + oranges[i]  >= s && b + oranges[i]  <= t) {
           validOranges.push(oranges[i] + a)
        }
    }
    console.log(validApples.length)
    console.log(validOranges.length)
}

countApplesAndOranges(s, t, a, b, apples, oranges)