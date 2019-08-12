function computerPlay(choice) {
    let min = 1;
    let max = 4;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    if (random == 1) {
        return "Rock";
    } else if (random == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();

    if (lowerPlayerSelection == lowerComputerSelection) {
        blurb = playerSelection + " Ties " + computerSelection + "!";
        return 1;
    } else if ((lowerPlayerSelection == 'rock' && lowerComputerSelection == 'scissors') ||
        (lowerPlayerSelection == 'paper' && lowerComputerSelection == 'rock') ||
        (lowerPlayerSelection == 'scissors' && lowerComputerSelection == 'paper')) {
        blurb = "You Win!  " + playerSelection + " beats " + computerSelection + ".";
        return 2;
    } else {
        blurb = "You Lose!  " + computerSelection + " beats " + playerSelection + ".";
        return 3;
    }
}

function game() {
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    let tied = 0;

    while (i < 5) {
        let playerChoice = prompt("Rock, Paper, Scissors?", "Enter your choice");
        let winner = playRound(playerChoice, computerPlay());

        if (winner == 2) {
            ++playerScore;
        } else if (winner == 3) {
            ++computerScore;
        } else {
            ++tied;
        }
        console.log(playerScore);
        console.log(computerScore);
        i++;
    }
    if (playerScore > computerScore) {
        console.log("You Won!");
    } else if (playerScore == computerScore) {
        console.log("You Lost!");
    } else {
        console.log("You Tied!");
    }

}

let playerScore = 0;
let computerScore = 0;
let tied = 0;
let blurb = "";

function event(e) {

    playerChoice = e.toElement.id;

    if (playerScore == 5 || computerScore == 5) {
          if (playerScore > computerScore) {
            results.textContent = "Game Over!  You Won!";
        } else {
            results.textContent = "Game Over! You Lost!";
        }
    } else {
        let result = playRound(playerChoice, computerPlay());

        if (result == 1) {
            tied++;
        } else if (result == 2) {
            ++playerScore;
            playerNumber.textContent = "0" + playerScore;
        } else {
            ++computerScore;
            computerNumber.textContent = "0" + computerScore;
        }

        results.textContent = blurb;
    }

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
          results.textContent = blurb + " Game Over!  You Won!";
          
      } else {
          results.textContent = blurb + " Game Over!  You Lost!";
      }}
}


const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => button.addEventListener('click', event));

const body = document.querySelector('body');


const heading = document.createElement('h1');
body.insertBefore(heading, container);

heading.textContent = "Rock, Paper, Scissors Game!";


const scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreBoard');
body.insertBefore(scoreBoard, container);


const results = document.createElement('div');
results.classList.add('results');
scoreBoard.appendChild(results);

const playerBoard = document.createElement('div');
playerBoard.classList.add('playerBoard');
scoreBoard.appendChild(playerBoard);

const playerTitle = document.createElement('div');
playerTitle.classList.add('playerTitle');
playerBoard.appendChild(playerTitle);

const playerNumber = document.createElement('div');
playerNumber.classList.add('playerNumber');
playerBoard.appendChild(playerNumber);

const computerBoard = document.createElement('div');
computerBoard.classList.add('computerBoard');
scoreBoard.appendChild(computerBoard);

const computerTitle = document.createElement('div');
computerTitle.classList.add('computerTitle');
computerBoard.appendChild(computerTitle);

const computerNumber = document.createElement('div');
computerNumber.classList.add('computerNumber');
computerBoard.appendChild(computerNumber);


results.textContent = "RESULTS: First to Five Wins!";

playerTitle.textContent = "Player Score";
playerNumber.textContent = "00";

computerTitle.textContent = "Computer Score";
computerNumber.textContent = "00";