//int variables
let playerSelection = '';
let roundCount = 0;

// return rock, paper, or scissors
function computerPlay () {
    let x = Math.floor(Math.random()*3);
    if (x === 1) {
        return 'Rock';
    } else if (x === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
//compare inputs
function playRound (playerSelection, computerSelection) {
    //sanitise input    
    let playerChoice = playerSelection.toLowerCase();
    let compChoice = computerSelection.toLowerCase();

    if (playerChoice === compChoice) {
        return `Everyone loses, you both picked ${compChoice}!`;
    } else if ((playerChoice === 'rock' && compChoice === 'scissors') || (playerChoice === 'scissors' && compChoice === 'paper') || (playerChoice === 'paper' && compChoice === 'rock')) {
        return `You win, ${playerChoice} beats ${compChoice}!`;
    } else {
        return `You lose, ${compChoice} beats ${playerChoice}!`;
    }
}
// loop 5 games
function game () {
    let keepGoing = true;
    while (keepGoing === true) {
        let playerSelection = prompt('Type in your choice!');
        playRound(playerSelection, computerPlay());
        roundCount++;
        if (roundCount >= 5) {
            keepGoing = false;
        }
    }
}