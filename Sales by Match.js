/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example

n = 7
ar = [1,2,1,2,1,3,2]


There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
*/

const n = 9;
const ar = [
    44, 55, 11, 15, 4, 72, 26, 91, 80, 14, 43, 78, 70, 75, 36, 83, 78, 91, 17,
    17, 54, 65, 60, 21, 58, 98, 87, 45, 75, 97, 81, 18, 51, 43, 84, 54, 66, 10,
    44, 45, 23, 38, 22, 44, 65, 9, 78, 42, 100, 94, 58, 5, 11, 69, 26, 20, 19,
    64, 64, 93, 60, 96, 10, 10, 39, 94, 15, 4, 3, 10, 1, 77, 48, 74, 20, 12, 83,
    97, 5, 82, 43, 15, 86, 5, 35, 63, 24, 53, 27, 87, 45, 38, 34, 7, 48, 24,
    100, 14, 80, 54,
];

function sockMerchant(n, ar) {
    // Write your code here
    let sorted = ar.sort((a, b) => a - b);
    let pairs = 0;

    for (let i = 0; i <= n; i++) {
        if (sorted.length === 1) {
            break;
        } else if (sorted[0] === sorted[1]) {
            sorted.splice(0, 2);
            pairs++;
        } else {
            sorted.splice(0, 1);
        }
    }
    console.log(pairs);
    return pairs;
}

sockMerchant(n, ar);
