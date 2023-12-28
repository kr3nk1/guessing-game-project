const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //user input and call checkguess
 function askGuess(){
    --numAttempts;
    rl.question('Enter a guess:', (answer) => {
        if(checkGuess(Number(answer))== true) {
            console.log("You win!");
            rl.close();
        } else if(numAttempts > 0){
            askGuess();
        } else {
            console.log('You Lose.');
            rl.close();
        };
    
  });
};

var secretNumber = 0;
var numAttempts = 5;

// comapare input against secretNumber
function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high");
        return false
    } else if (num < secretNumber) {
        console.log("Too low");
        return false
    } else {
        console.log('Correct!');
        return true;
    }
};

//set random number
function randomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// enter a min and a max number, implement random  & secure Number data type
function askRange() {
    rl.question('Enter a min number: ', (min) => {
        rl.question('Enter a max number: ', (max) => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            secretNumber = randomInRange(Number(min),Number(max));
            askGuess();
        });
    });
};

//Bonus: Limiting the number of turns

function askLimit() {
    rl.question('How many attempts do you want? ', (limit) => {
        numAttempts= Number(limit);
        askRange();
})
}

return askLimit();
/* return askGuess(); */
