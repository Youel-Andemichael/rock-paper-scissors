function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
              (playerSelection === 'paper' && computerSelection === 'rock') ||
              (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    let choice;
    switch(randomNumber){
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}

// Function to update the result display div with the game result
function updateResultDisplay(result) {
    const resultDisplay = document.getElementById('result-display');
    resultDisplay.textContent = result;
}

// Function to handle button click events
function handleButtonClick(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResultDisplay(result);

    // Update scores
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }

    // Update score display
    updateScoreDisplay();

    if (playerScore ===5) {
        alert("Congratulations, you win!");
        resetGame()
    } else if (computerScore ===5) {
        alert("Sorry, you lose!");
        resetGame()
    }
}

// Function to reset the game
function resetGame(){
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    // Update score display
    updateScoreDisplay() 
}
// Create and append rock button
const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
rockButton.addEventListener('click', () => handleButtonClick("rock"));
document.body.appendChild(rockButton);

// Create and append paper button
const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
paperButton.addEventListener('click', () => handleButtonClick("paper"));
document.body.appendChild(paperButton);

// Create and append scissors button
const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener('click', () => handleButtonClick("scissors"));
document.body.appendChild(scissorsButton);

// Create a div for displaying results
const resultDisplay = document.createElement('div');
resultDisplay.id = 'result-display';
document.body.appendChild(resultDisplay);

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/*
- Planning 
    Rock-Paper-Scissors will be a browser console program where the only UI interaction 
    is a user entering either (rock, paper, or scissors)
- Desired output = rock, paper, scissors
- The user will input one of the 3 available options of; rock, paper, scissors
- The computer will randomly select one of the 3 available options of; rock, paper, scissors

List set of rules:
- If userChoice = rock and computerChoice = paper,
print "you lose!"
- If userChoice = rock and computerChoice = scissors,
print "you win!"
- If userChoice = paper and computerChoice = scissors,
print "you lose!"
- If userChoice = paper and computerChoice = rock,
print "you win!"
- If userChoice = scissors and computerChoice = rock,
print "you lose!"
- If userChoice = scissors and computerChoice = paper,
print "you win!"
- If userChoice == computerChoice,
print "tie!"
*/