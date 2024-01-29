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

    console.log(`Tie! ${capitalizedPlayerSelecction} ties with ${capitalizedComputerSelection}`);
    return null
  }

  else if (playerSelecction === 'rock') {
    if (computerSelection === 'paper') {
      console.log(`You Lose! Paper beats Rock`);
      return false;
    }
    else if (computerSelection === 'scissors') {
      console.log(`You Win! Rock beats Scissors`);
      return true;
    }
  }

  else if (playerSelecction === 'paper') {
    if (computerSelection === 'rock') {
      console.log(`You win! Paper beats Rock`);
      return true;
    }
    else if (computerSelection === 'scissors') {
      console.log(`You lose! Scissors beats Paper`);
      return false;
    }
  }

  else if (playerSelecction === 'scissors') {
    if (computerSelection === 'rock') {
      console.log(`You Lose! Rock beats Scissors`);
      return false;
    }
    else if (computerSelection === 'paper') {
      console.log(`You Win! Scissors beats Paper!`);
      return true;
    }
  }
}

// get and restrict player choises to rock paper and scissors
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
