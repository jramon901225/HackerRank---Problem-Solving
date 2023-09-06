/*
Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x,y ,z and  representing the respective positions for cats A and B, and for mouse C. Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

If cat  catches the mouse first, print Cat A.
If cat  catches the mouse first, print Cat B.
If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

If cat A catches the mouse first, print Cat A.
If cat B catches the mouse first, print Cat B.
If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
*/

const x = 4;
const y = 7;
const z = 5;

function catAndMouse(x, y, z) {

    const catA = Math.abs(x-z)
    const catB = Math.abs(y-z)

    if(catA === catB){
        return 'Mouse C'
    } else if(catB < catA) {
        return 'Cat B'
    } else {
        return 'Cat A'
    }
}

console.log(catAndMouse(x, y, z));
