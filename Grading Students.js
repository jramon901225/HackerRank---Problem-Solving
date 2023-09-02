/*
 any grade less than 40 is failing grade

 *if the difference between the grande and the next multiple of 5 is less than 3, round grade up to next multiple of 5.

 *if the value of grade is less than 38, no rounding occurs as the result will still be a failing grade

*/

/* Pasos
si es menor a 38 se queda reprobado[x]
si es mayor a 38 comprobar cual es su multiplo de 5 proximo, y la diferencia es menor a 3 se redondea[x]

*/

const grades = [4, 73, 67, 38, 33, 74];

const newGrades = [];

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);

    if (grades[i] >= 38) {
        if ((grades[i] + 1) % 5 === 0) {
            newGrades.push(grades[i] + 1);
        } else if ((grades[i] + 2) % 5 === 0) {
            newGrades.push(grades[i] + 2);
        } else {
            newGrades.push(grades[i]);
        }
    } else {
        newGrades.push(grades[i]);
    }
}

