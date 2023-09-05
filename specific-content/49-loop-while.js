// example of loop while with a dice

// start with a random dice number
let dice = Math.trunc(Math.random() * 6) + 1;

//check if it's different from six and enter in loop
while (dice !== 6) {
    console.log(`You rolled a: ${dice}`);
    // create a random number and enter loop again
    dice = Math.trunc(Math.random() * 6) + 1;
    // if the next number is six, finish the loop
    if (dice === 6) console.log("Loop is about to end...")
}

// print in console 

/*
You rolled a: 1
You rolled a: 4
You rolled a: 2
You rolled a: 1
Loop is about to end... 
*/