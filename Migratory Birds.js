/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
*/

//const arr = [1, 4, 4, 4, 5, 3];

// function migratoryBirds(arr) {
//     // Write your code here

//     let newArr = {};
//     const uniqueVal = [...new Set(arr)];
//     uniqueVal.forEach((elem) => {
//         const filterVal = arr.filter((val) => val == elem);
//         const totalVal = filterVal.length;
//         newArr[elem] = totalVal;
//     });

//     let result = Object.entries(newArr).sort(([, a], [, b]) => b - a);
//     let final = result[0][0];
//     console.log(final)
//     return final;
// }

// migratoryBirds(arr);

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
    let objectArr = arr.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});
    
    const maxVal = Math.max(...Object.values(objectArr));
    const num = Object.keys(objectArr).find((key) => objectArr[key] === maxVal);

    return num;
}

console.log(migratoryBirds(arr));
migratoryBirds(arr);
