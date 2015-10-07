////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    var playerMove;
    var move;
    if (move) {
        playerMove = move;
    }
    else {
        playerMove = getInput();
    }
    return playerMove;
}

function getComputerMove(move) {
    var computerMove;
    if (move) {
        computerMove = move;
    }
    else {
        computerMove = randomPlay();
    }
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        }
        else if (computerMove === "scissors") {
            winner = "player";
        }
        else {
            winner = "tie";
        }
    }

    else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            winner = "computer";
        }
        else if (computerMove === "rock") {
            winner = "player";
        }
        else {
            winner = "tie";
        }
     }

    else {
        if (computerMove === "rock") {
            winner = "computer";
        }
        else if (computerMove === "paper") {
            winner = "player";
        }
        else {
            winner = "tie";
        }
    }
    return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    var roundNum = 0;
    console.log("Let's play Rock, Paper, Scissors.");

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

        if (winner === "tie") {
            roundNum++;
            console.log("Round " + roundNum + " was a tie.");
        }
        else if (winner === "player") {
            playerWins++;
            roundNum++;
            console.log("You won round " + roundNum + "!"); 
            }
        else {
            computerWins++;
            roundNum++;
            console.log("The computer won round " + roundNum + ".");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    }

    if (playerWins > computerWins) {
        return 'You are the rock paper scissors champion!';
    }
    else {
        return 'The computer is the rock paper scissors champion.';
    }
    
}


function playTo(x) {
    var playerWins = 0;
    var computerWins = 0;
    var roundNum = 0;
    console.log("Let's play Rock, Paper, Scissors.");

    while (playerWins < x && computerWins < x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

        if (winner === "tie") {
            roundNum++;
            console.log("Round " + roundNum + " was a tie.");
        }
        else if (winner === "player") {
            playerWins++;
            roundNum++;
            console.log("You won round " + roundNum + "!"); 
            }
        else {
            computerWins++;
            roundNum++;
            console.log("The computer won round " + roundNum + ".");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    }

    if (playerWins > computerWins) {
        return 'You are the rock paper scissors champion!';
    }
    else {
        return 'The computer is the rock paper scissors champion.';
    }
    
}