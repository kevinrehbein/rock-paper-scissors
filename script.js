play();

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissor: ");

    if (choice === "Rock" || choice === "rock")
        return "rock";
    else if (choice === "Paper" || choice === "paper")
        return "paper"
    else if (choice === "Scissor" || choice === "scissor")
        return "scissor"
    else ("Please check your answer!")
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

function play() {
    let isOver = false;
    let winner = null;
    let human = null;
    let computer = null;

    while (!isOver) {
        human = getHumanChoice();
        computer = getComputerChoice();

        if ((human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock") || (human === "scissor" && computer === "paper")){
            winner = "human";
            isOver = true;
        } else if ((computer === "rock" && human === "scissor") || (computer === "paper" && human === "rock") || (computer === "scissor" && human === "paper")){
            winner = "computer";
            isOver = true;
        } else if (human === computer){
            console.log("Human: " + human);
            console.log("Computer " + computer);
            console.log("Draw")
        }
    }

    console.log("Human: " + human);
    console.log("Computer: " + computer);
    console.log("The winner is: " + winner);
}
    
    
    
