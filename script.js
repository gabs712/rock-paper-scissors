// Get a random number for the computer
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return 'rock';
  else if (randomNumber === 1) return 'paper';
  else if (randomNumber === 2) return 'scissors';
}

// Choose the winner based on rock paper scissors rules
function playRound(playerSelecction, computerSelection) {
  if (playerSelecction === computerSelection) {
    const capitalizedPlayerSelecction = playerSelecction[0].toUpperCase() + playerSelecction.slice(1);
    const capitalizedComputerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);

    return `Tie! ${capitalizedPlayerSelecction} ties with ${capitalizedComputerSelection}`;
  }

  else if (playerSelecction === 'rock') {
    if (computerSelection === 'paper') return `You Lose! Paper beats Rock`;
    else if (computerSelection === 'scissors') return `You Win! Rock beats Scissors`
  }

  else if (playerSelecction === 'paper') {
    if (computerSelection === 'rock') return `You win! Paper beats Rock`;
    else if (computerSelection === 'scissors') return `You lose! Scissors beats Paper`;
  }

  else if (playerSelecction === 'scissors') {
    if (computerSelection === 'rock') return `You Lose! Rock beats Scissors`;
    else if (computerSelection === 'paper') return `You Win! Scissors beats Paper!`;
  }
}

function getPlayerChoice() {
  while (true) {
    const choice = prompt('Rock, Paper or Scissors?').toLowerCase()

    switch (choice) {
      case 'rock':
      case 'paper':
      case 'scissors':
        return choice;

      default:
        alert('You must choose one of the three!')
    }
  }
}

function playGame() {
  let wins = 0;
  let loses = 0;
  test(wins)
  console.log(wins)

}
//
function test(wins) {
  wins += 1;
  console.log(wins)
}

playGame()