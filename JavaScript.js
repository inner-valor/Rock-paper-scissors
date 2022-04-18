
const min = 1;
const max = 3;


// create a random number.
function randomNumber() {
   return Math.floor(Math.random() * (max - min + 1) + min);
    
}

// choses a random number 1 - 3 to pick between rock and scissors.
function computerPlay() {
    
    if (randomNumber() === 1) {
       return String("rock");

    } else if (randomNumber() === 2) {
       return String("paper");

    } else {
       return String("scissor");

    }
    
}
// records the wins, loss, and rounds.
let win = 0;
let loss = 0;
let r = 0;

// game mechanics.
function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == "rock" && computerSelection === "scissor"|| 
        playerSelection.toLowerCase() == "paper" && computerSelection === "rock"||
        (playerSelection.toLowerCase() == "scissor" || playerSelection.toLowerCase() == "scissors") && computerSelection === "paper") 
    {
        return win++, console.log(`you Won round ${r + 1}! ${playerSelection} beats ${computerSelection}`);
        
        
    } else if (playerSelection.toLowerCase() == computerSelection || playerSelection.toLowerCase() == "scissors" && computerSelection == "scissor") {
        return console.log(`no-one wins round ${r + 1}`);

    } else {
        return loss++, console.log(`you loss round ${r + 1}! ${computerSelection} beats ${playerSelection}`);
        
    }
    
}
// win/loss conditions
function condition(r) {
    if (win > loss && r === 5) {
        return console.log("WINNER!!");

    } else if (win < loss && r === 5) {
        return console.log("LOSER!!");
        
    } else if (win == loss && r === 5) {
        return console.log("Tie");
    }
}
let playerSelection;

// game rounds
function game() {
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("rock paper or scissors");

        playRound(playerSelection, computerPlay())
        
        r++;
    }

    condition(r)
// reset game score.
    r = 0;
    win = 0;
    loss = 0;


}


