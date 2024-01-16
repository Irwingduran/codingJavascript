// the are two gymnastics teams 'Dolphins' and 'Koalas'. 
// they compete against each other 3 times. 
// the winner with the highest averange score wins trophy!

//Example 1:

// average of teams 
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
// print the results 
console.log(`average of dolphins is: ${averageDolphins} and average of koalas is: ${averageKoalas}`)
// logic to choose winner
if (averageDolphins > averageKoalas) {
    console.log("Dolphins team win!")
} else if (averageDolphins === averageKoalas) {
    console.log("both win!") 
} else {
    console.log("Koalas team win!")
}; 

//Example 2:

// logic to choose winner
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins team win!")
} else if (averageDolphins === averageKoalas) {
    console.log("both win!") 
} else {
    console.log("Koalas team win!")
}; 



