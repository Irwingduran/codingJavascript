// Use the BMI example from '1-coding.js'
//print a nice output to the console, saying who has the higher BMI
//use a template literal to include the BMI values in the outputs

// store Mark's and John's mass and height in variables 
const massMark = 78; //kg 
const heightMark = 1.68; // height

const massJohn = 92;
const heightJohn = 1.95;
// calculate both their BMIs using the formula
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher that John's")
} else {
    console.log("John's BMI is higher than Mark's")
}

const message = (`Mark's BMI: ${BMIMark} and John BMI: ${BMIJohn}`);

console.log(message);