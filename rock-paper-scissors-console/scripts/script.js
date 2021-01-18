function computerPlay() {
    let play = ["rock", "paper", "scissors"];

    return play[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase().trim();
    let computer = computerSelection.toLowerCase();

    let result = gameRules(player, computer);

    if (player == result) {
        return `You Won!! ${player} beats ${computer}`;
    } else if (computer == result) {
        return `You Lost!! ${computer} beats ${player}`;
    } else if (player == computer) {
        return "It's a tie!!";
    } else {
        return "Invalid input.";
    }
}

function gameRules(moveOne, moveTwo) {
    if ((moveOne=="paper" && moveTwo=="rock") || (moveTwo=="paper" && moveOne=="rock")) {
        return "paper";
    } else if ((moveOne=="rock" && moveTwo=="scissors") || (moveTwo=="rock" && moveOne=="scissors")) {
        return "rock";
    } else if ((moveOne=="scissors" && moveTwo=="paper") || (moveTwo=="scissors" && moveOne=="paper")) {
        return "scissors";
    } else if (moveOne == moveTwo) {
        return "tie";
    } else {
        return "Invalid input.";
    }
}

function game() {
    let player = 0;
    let computer = 0;

    while (player < 5 && computer < 5) {
        let playerSelection = prompt("Enter you move: ");
        let computerSelection = computerPlay();

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);  
        if (roundResult.includes("Won")) {
            player++;
            console.log("Player: "+player+" Computer: "+computer);
        } else if (roundResult.includes("Lost")) {
            computer++;
            console.log("Player: "+player+" Computer: "+computer);
        }
    }

    if (player > computer) {
        console.log("Player won the game!!");
    } else {
        console.log("Computer won the game!!");
    }
}