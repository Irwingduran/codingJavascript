// two gymnastics teams, 'Dolphins' and 'Koalas'.
// there is a new gymnastics discipline, which works differently.
// each team competes 3 times, and then the average os the 3 scores is calculated
// (so one average score per team)
// a team only wins if it has at least double the average score od the other team.
// otherwise, no team wins!


// arrow function 
const calcAverage = (a, b, c) => (a + b + c) / 3;

//use function for calculate both teams 
const scroeDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins}) vs (${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win! (${avgKoalas}) vs ${avgDolphins}`)   
    }else{
        console.log("No teams wins...")
    }
};
checkWinner(scoreKoalas, scroeDolphins);

checkWinner(556, 112);