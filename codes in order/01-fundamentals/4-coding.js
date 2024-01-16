// Steven wnats to build a very simple tip ccalculator for whenever he goes eating in a restaurant.
// in his country, it's usual to tip 15% if the bill value is between 50 and 300.
// if the value is different, the tip is 20%.

// ternary operator!

// bill
const bill = 450;
// tip and total value without is/else
const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
// print 
console.log(`The bill was: ${bill}, the tip was: ${tip} and total value: ${tip + bill}`)