////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(move) {
    var playerMove;
    if (move !== null) {
        playerMove = move;
    }
    else {
        playerMove = getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return myExp1;
}

function getComputerMove(move) {
    var compMove;
    if (move !== null) {
        compMove = move;
    }
    else {
        compMove = randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
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

    else if (playerMove === "scissors") {
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
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    if (winner === "player") {
    	playerWins += 1;
    }
    else if (winner === "computer") {
    	computerWins += 1;
    }

	console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
	console.log('The score is currently ' + playerWins + ' to ' + computerWins);

    if (playerWins < 5 && computerWins < 5) {
		return 'Keep playing!';
	}
	else if (playerWins > computerWins) {
		return 'The player has won!';
	}
	else {
		return 'The computer has won!';
	}
}

  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    if (winner === "player") {
    	playerWins += 1;
    }
    else if (winner === "computer") {
    	computerWins += 1;
    }

	console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
	console.log('The score is currently ' + playerWins + ' to ' + computerWins);

	if (playerWins < x && computerWins < x) {
		return 'Keep playing!';
	}
	else if (playerWins > computerWins) {
		return 'The player has won!';
	}
	else {
		return 'The computer has won!';
	}
}

