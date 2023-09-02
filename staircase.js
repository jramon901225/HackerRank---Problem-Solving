//imprime una escalera de # alineada a la derecha de tamaño n

const n = 6;

// for (let i = 1; i <= n; i++) {
//     const hash = "#".repeat(i).padStart(n);
//     console.log(hash);
// }

/*
otra forma de resolverlo
*/

for (let i = 1; i <= n; i++) {
    let resultado = "";

    for (let j = 1; j <= i; j++) {
        resultado += "#";
    }

    console.log(resultado.padStart(n));
}
