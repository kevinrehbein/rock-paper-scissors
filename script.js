let winner = null;
let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const results = document.createElement("div");
results.classList.add("results");
const round = document.createElement("p");
const scores = document.createElement("p");
const roundwinner = document.createElement("p");
roundwinner.classList.add("round-winner");
body.appendChild(results);
results.appendChild(round);
results.appendChild(roundwinner);
results.appendChild(scores);

const buttons = document.querySelectorAll(".container button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        playRound(button.id);

        scores.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore;
        
        if(isOver()) {
            endGame();
        }
    });
});

function endGame() {
    console.log("ENDGAME");
    humanScore = 0;
    computerScore = 0;
}

function getComputerChoice() {
    let choice = Math.random();

    if (choice <= 0.33) {
        return "rock";  
    } else if (choice > 0.33 && choice <= 0.67) {
        return "paper";
    } else return "scissor";
}

function isOver() {
    return humanScore === 5 || computerScore === 5;
}

function playRound(humanChoice) {
    let winner = null;
    let computerChoice = getComputerChoice();

    if ((humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")){
        winner = "human";
        humanScore++;
        round.textContent =   "Human: " + humanChoice + " | Computer: " + computerChoice;
        roundwinner.textContent = "The winner of the round is: " + winner;
    } else  if ((computerChoice === "rock" && humanChoice === "scissor") ||
                (computerChoice === "paper" && humanChoice === "rock") ||
                (computerChoice === "scissor" && humanChoice === "paper")){
        winner = "computer";
        computerScore++;
        round.textContent =   "Human: " + humanChoice + " | Computer: " + computerChoice;
        roundwinner.textContent = "The winner of the round is: " + winner;
    } else  if (humanChoice === computerChoice){
        winner = 'Tie';
        round.textContent =   "Human: " + humanChoice + " | Computer: " + computerChoice;
        roundwinner.textContent = "Draw";
    }
}