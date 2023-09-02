/*
Completa la funcion:

dos canguros deben llegar al mismo punto, dados su punto de partida y la distancia de cada salto, estos deben coincidir en algun punto, si es el caso imprime 'YES' caso contrario imprime 'NO'

x1 = posicion inicial canguro 1
v1 = distancia de salto canguro 1
x2 = posicion inicial canguro 2
v2 = distancia de salto canguro 2
*/

/*Pasos a seguir:
comparar los numeros si son iguales
sumar los numeros hasta 10,000
de ser asi imprime YES
caso contrario imprime NO
*/

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (x1 > x2) {
        if (v1 > v2) return console.log("NO");
    }

    if(x2> x1) {
        if(v2 > v1) return console.log('NO')
    }

    const jump = (x2 - x1) / (v2 - v1)
    console.log(jump)
    console.log(jump % 1 === 0? 'yes' : 'no' )
}

kangaroo(x1, v1, x2, v2);
