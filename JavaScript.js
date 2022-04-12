
/*
com will randomly pick rock, paper, or scissor.

player will pick rock, paper, or scissor.

a function compiers the com and the players picks:
paper beats rock, rock beats scissor, and scissor beats paper.

*/

/*
OK. com function will randomly pick 1 to 3.
OK. 1 will be rock and 3 will be scissors.
*/
const min = 1;
const max = 3;

let com;
let player;

function randomNumber() {
   return Math.floor(Math.random() * (max - min + 1) + min);
    
}

function computerPlay() {


    if (randomNumber() === 1) {
       return com = "rock";

    } else if (randomNumber() === 2) {
       return com = "paper";

    } else {
       return com = "scissor";

    }
    
}









