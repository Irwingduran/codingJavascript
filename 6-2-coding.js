// Steve is still building his tip calculator. 
// Tip 15% of the bill if the bill value is between 50 and 300, 
// and if the value is different, the tip is 20%


const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
}

const bill = ()
console.log(bill);

