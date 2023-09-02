const a = [2,4];
const b = [16,32,96];

getTotalX(a,b)

function getTotalX(a, b) {
    // Write your code here

    let count = 0
    const lcm = Math.max(...a)
    const gcd = Math.min(...b)
    
    //loop between array[a](max) and array[b](min)
    for(let i = lcm; i<= gcd; i++) {
        //Check if the i(integer) is factor of Array[a](elements) & Array[b] are factor of the i(integer)
        if((a.every( e => i % e === 0)) && b.every(e => e % i === 0)) {
            count ++ //Add +1 for each found integer
        }
    }
    console.log(count)
    return count
    
}

