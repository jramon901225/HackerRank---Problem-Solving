/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

*/

const s = [4];
const d = 4;
const m = 1;

function birtday(s, d, m) {
    let count = 0; //Creamos una variable de contador

    for (i = 0; i < s.length; i++) {
        //iteramos el array
        let subarr = s.slice(i, i + m); //creamos un subarray de tamaño (0,2)
        let sum = subarr.reduce((a, b) => a + b, 0); // sumamos el subarray en su totalidad
        if (sum === d) {
            //si la suma del subarray es igual a d
            count += 1; // Incrementamos el contador en 1
        }
    }
    return count; //retornamos el contador
}

birtday(s, d, m);
