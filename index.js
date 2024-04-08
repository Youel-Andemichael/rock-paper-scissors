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

const playerSelection = "scissors";
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