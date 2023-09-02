/*
Given an array of integers and a positive integer k , determine the number of (i,j)  pairs where i < k and  ar[i] + ar[j] is divisible by K.

 Three pairs meet the criteria: [1,4] [2,3] and [4,6] 
*/
const n = 6;
const ar = [1, 2, 3, 4, 5, 6];
const k = 5;

let count = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
        sum = ar[i] + ar[j];
        if (sum % k === 0 && i !== j) {
            count++;
        }
    }
}
 
console.log(count);
