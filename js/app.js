'use strict'

// remember .includes() and .join() and no functions ()

let welcome = alert ('Welcome to Jareds page! Where youll learn all')

// Question 1
let greeting = prompt('You remind me of someone special, whats your name?')
    alert(greeting + ' is a lovely name, before we move forward I would like to play a game!');{ 
    } else {greeting === 'no' || greeting === 'n'
        alert('Pretty please?')
    }

// Question 2
let marine = prompt('Do I look like I could have been in the military? Yes/No').toLowerCase();
if (marine === 'yes' || marine === 'y') {
    alert('Youre on a roll! I actually worked there for 5 years!')
    // console.log(You're absolutely right! I was in the military!);
} else {
    alert('Wow, usually people can tell right away')
}

// Question 3
let japan = prompt('Have you ever been to japan? Yes or No');
if (japan === 'yes' || japan === 'y');
alert('Really? Thats awesome! It was the best experience of my life.');{
// console.log(I actually got to shake hands with a yakuza member there);
} else {
    alert('I definitely recommend it!')
}



// Question 4
let mma = prompt('Have you ever trained in MMA? Yes or No')
if (mma === 'yes' || mma === 'y')
    alert('Oh cool, maybe you can teach me something!'); {
// console.log(mma);
} else {
    alert('You should really try it!')
}

// Question 5
let ocSpray = prompt('Could believe that I willingly put peppers into my eyes?')
if (ocSpray === 'yes' || ocSpray === 'y'){
    alert('It felt like the longest 2 hours of my life!');
// console.log(ocSpray);
} else {
    alert('I actually did it 3 times if you can belieive it.')
}









// Question 6 instructions
// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.


// Question 6
let attemptsRemaining = 4
let userHasAnsweredCorrectly = false
console.log("You have only 4 attempts");

while (attemptsRemaining) {
    attemptsRemaining--;
    let jaredCatAge = parseInt(prompt('Did you know I have a cat? Guess his age'));
    console.log(jaredCatAge, 3)
    console.log(typeof 3); 
    console.log('That is incorrect. You have ${attemptsRemaining} attempts remaining.')
    if (jaredCatAge === 5) {
        alert('She might be old but shes not that old.')
    }  
    else if (jaredCatAge === 2) {
        alert('Thats too young for my cat, she wasnt born yesterday you know!')
    }
    else if (jaredCatAge === 3) {
        alert('That is absolutely right!')
    }
    else if (jaredCatAge <= 4) {
        alert('Could be but im thinking just a tad younger.')
    }
    else {
        alert('The correct answer is 3! She was 2 when we met a year ago.')
    }
}





// let score = 0

// let myFavPasta = [Penne, Rigatoni, Linguine]

// while (attemptsRemaining){
//     attemptRemaining--;
//     console.log('I am in the while loop. you have ${attemptsRemaining} attempts remaining.')
// }

// let attempts = 7;

// for (let i = 0; i < attempts; i++) {
//     console.log('I am in the for loop. You have ${attempts - i} attempts remaining')
// }


// = 








// QUESTION 7
// let myFavColors = ['blue', 'cream', 'gold'];
// let userResponse = 'orange';


// // WHILE LOOP

// let attemptsRemaining = 3;
// let userHasAnsweredCorrectly = false;

// while (attemptsRemaining) {
//   attemptsRemaining--;
//   console.log(`I am in the while loop. You have ${attemptsRemaining} attempts remaining.`);
//   for (let i = 0; i < myFavColors.length; i++) {
//     // console.log(userResponse, myFavColors[i]);
//     if (userResponse === myFavColors[i]) {
//       console.log('Your correct');
//       score++;
//     }
//   }
// }


// FOR LOOP

// let attempts = 7;

// for (let i = 0; i < attempts; i++) {
//   // 7 - 0 = 7 - 1 = 6
//   console.log(`I am in the for loop. You have ${attempts - i - 1} attempts remaining`);
//   for (let j = 0; j < myFavColors.length; j++) {
//     // console.log(userResponse, myFavColors[j]);
//     if (userResponse === myFavColors[j]) {
//       console.log('Your correct');
//     }
//   }
// }

/*
// DO WHILE
// it will do the thing at least one, and then avaluate if it should do it again.

let attemptsLeft = 4;
do {
    console.log(`I am in the do while  loop ${attemptsLeft}`);
    attemptsLeft--;
} while (attemptsLeft >= 0);

*/


// QUESTION 6
// guess a number

/*
response if:
- guess is too high

- guess is too low
- guess is correct
- how many attempts they have left
- if there are no attempts left
- if there are no attempts left, give them the answer

*/