/*
wo friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill=[2,4,6]. Anna declines to eat item k=bill[1]  which costs 6. If Brian calculates the bill correctly, Anna will pay (2+4)/2 =3. If he includes the cost of bill[2] , he will calculate (2+4+6)/2 = 6 . In the second case, he should refund 3 to Anna.
*/

const bill = [3, 10, 2, 9]; // bill[i]
const k = 1; //item not eated
const b = 7; //amount charged

function bonAppetit(bill, k, b) {
    // Write your code here
    bill.splice(k, 1);
    const totalBill = bill.reduce((acumm, curr) => {
        return acumm + curr / 2;
    }, 0);

    const debt = b - totalBill;

    let result;

    if (debt === 0) {
        result = "Bon Appetit";
    } else {
        result = debt;
    }

    console.log(result);
}

bonAppetit(bill, k, b);
