//looping backwards and loops in loops

const jonas = [
    'Jonas',
    'Junior',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// 0, 1, ...., 4
// 4, 3, ...., 0
// wrote object backhand with a 'for' loop
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// print in console 

/*
4 [ 'Michael', 'Peter', 'Steven' ]
3 teacher
2 46
1 Junior
0 Jonas
*/


// other exercise of a 'for' loop 
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------String exercise ${exercise}`);


    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

// print in console 
/* 
-------String exercise 1
Exercise 1: Lifting weight repetition 1
Exercise 1: Lifting weight repetition 2
Exercise 1: Lifting weight repetition 3
Exercise 1: Lifting weight repetition 4
Exercise 1: Lifting weight repetition 5
-------String exercise 2
Exercise 2: Lifting weight repetition 2        
Exercise 2: Lifting weight repetition 3        
Exercise 2: Lifting weight repetition 4        
Exercise 2: Lifting weight repetition 5        
-------String exercise 3
Exercise 3: Lifting weight repetition 1        
Exercise 3: Lifting weight repetition 2        
Exercise 3: Lifting weight repetition 3        
Exercise 3: Lifting weight repetition 4        
Exercise 3: Lifting weight repetition 5 
*/