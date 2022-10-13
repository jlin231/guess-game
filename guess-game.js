const readline = require('node:readline');
const { setMaxListeners } = require('node:stream');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomInRange(min, max) {
    min = Number(min);
    max = Number(max);
    min = Math.random() * min
    max = Math.random() * max
    return Math.floor(Math.random() * (max - min) + min);
}

let secretNumber = randomInRange(0, 100)

function checkGuess(num) {
    num = Number(num)
    if (num > secretNumber) {
        console.log("Too high.")
        return false;
    }
    else if (num < secretNumber) {
        console.log("Too low.")
        return false;
    }
    else if (num === secretNumber) {
        console.log("Correct!")
        return true;
    };
}

function askGuess() {
    //ask a user to enter a guess
    rl.question("Enter a guess: ", (result) => {
        if (checkGuess(result))
            rl.close()
        else {
            askGuess()
        }
    })
}

function askRange() {
    let max;
    let min;
    rl.question("Enter a max number: ", (result1) => {
        rl.question("Enter a min number: ", (result2) => {
            max = result1;
            min = result2;
            secretNumber = randomInRange(min, max)
            askGuess()
        })
    })
}

askRange();
