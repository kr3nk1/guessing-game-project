const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

 function askGuess(){
    rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
  });
}

var secretNumber = 0;

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

}
