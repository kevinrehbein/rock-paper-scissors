let humanScore = 0;
let computerScore = 0;

playGame(humanScore, computerScore);

function getHumanChoice() {
    let invalidInput = false;
    let choice = null;

    while (!invalidInput) {
        choice = prompt("Choose rock, paper or scissor: ").toLocaleLowerCase();

        if (choice === "rock")
            return "rock";
        else if (choice === "paper")
            return "paper"
        else if (choice === "scissor")
            return "scissor"
        else {
            console.log("Please check your answer!");
            invalidInput = true;
        }
    }
}

function getComputerChoice() {
    let choice = Math.random();
    console.log(choice);

    if (choice <= 0.33) {
        return "rock";  
    } else if (choice > 0.33 && choice <= 0.67) {
        return "paper";
    } else return "scissor";
}

function playRound() {
    let winner = null;
    let isOver = false;
    let humanChoice = null;
    let computerChoice = null;

    while (!isOver) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")){
            winner = "human";
            isOver = true;
        } else if ((computerChoice === "rock" && humanChoice === "scissor") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissor" && humanChoice === "paper")){
            winner = "computer";
            isOver = true;
        } else if (humanChoice === computerChoice){
            console.log("Human: " + humanChoice);
            console.log("Computer " + computerChoice);
            console.log("Draw")
        }
    }

    console.log("Human: " + humanChoice);
    console.log("Computer: " + computerChoice);
    console.log("The winner of the round is: " + winner);

    return winner;
}

function playGame(humanScore, computerScore) {
    let winner = null;

    for (let round = 0; round < 5; round++) {
        winner = playRound();

        if (winner == "human") {
            humanScore++;
        } else if (winner == "computer") {
            computerScore++;
        }

        console.log("Human Score: " + humanScore + "| Computer score: " + computerScore);
    }

    if (computerScore == humanScore) {
        console.log("The result of the game is: Draw");
    } else if (computerScore > humanScore) {
        console.log("The result of the game is: Computer wins!");
    } else console.log("The result of the game is: Human wins!");
}
    
    
    
