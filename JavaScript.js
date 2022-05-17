let results = document.querySelector('#results');


// create a random number.
function randomNumber() {
   return Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
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
let roundPlayed = 0;
const endResult = document.querySelector('#endresult');
const TOTALROUNDS = 5;







// game mechanics.

function playRound(playerSelection, computerSelection) {
    roundPlayed++
    condition() // condition will play when roundplayed = TOTALROUNDS.

    if (roundPlayed <= TOTALROUNDS) { // disable the buttons if false

        if (playerSelection.toLowerCase() == "rock"    && computerSelection === "scissor"|| 
            playerSelection.toLowerCase() == "paper"   && computerSelection === "rock"   ||
            playerSelection.toLowerCase() == "scissor" && computerSelection === "paper") 
        {

            win++
            document.querySelector('#wins').textContent = win;
            return results.textContent = `you Won round ${roundPlayed}! ${playerSelection} beats ${computerSelection}`;
        
        
        } else if (playerSelection.toLowerCase() == computerSelection) {

            return results.textContent =`no one wins round ${roundPlayed}!`;

        } else {

            loss++
            document.querySelector('#losses').textContent = loss;
            return results.textContent = `you loss round ${roundPlayed}! ${computerSelection} beats ${playerSelection}`;
        
    }
    }

}
// win/loss conditions

function condition() {
    
    if (win > loss && roundPlayed === TOTALROUNDS) {
        
       return endResult.textContent = "WINNER!!";

    } else if (win < loss && roundPlayed === TOTALROUNDS) {
       return endResult.textContent = "LOSER!!";
        
    } else if (win == loss && roundPlayed === TOTALROUNDS) {
       return endResult.textContent = "Tie";
    }
}

// player selection
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});
paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
});
scissor.addEventListener('click', () => {
    playRound('scissor', computerPlay());
});
    






