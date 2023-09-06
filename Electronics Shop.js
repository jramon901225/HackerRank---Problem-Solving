/*
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.
*/

const keyboards = [4];
const drives = [5];
const b = 5;

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */

    let max = -1;

    for (let i = 0; i < keyboards.length; i++) {
        const keyboardPrice = keyboards[i];
        for (let j = 0; j < drives.length; j++) {
            const drivePrice = drives[j];
            if (
                keyboardPrice + drivePrice <= b &&
                keyboardPrice + drivePrice > max
            ) {
                max = keyboardPrice + drivePrice;
            }
        }
    }
    return max;
}

console.log(getMoneySpent(keyboards, drives, b));
