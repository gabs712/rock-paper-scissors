let wins = 0;
let loses = 0;
let ties = 0;
let gameOngoing = true

let buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  button.addEventListener('click', playGame)
})

function playGame(e) {
  if (gameOngoing) {
    let playerChoice = e.target.name
    let computerChoice = getComputerChoice()
  
    changeEmoji(playerChoice, computerChoice)
    let roundResult = playRound(playerChoice, computerChoice);
    
    if (roundResult === true) wins += 1;
    else if (roundResult === false) loses += 1;
    else ties += 1;
    
    let score = document.querySelector('.score')
    score.textContent = `Wins: ${wins}, Loses: ${loses}, Ties: ${ties}`
  
    if (wins === 5 || loses === 5) {
      let result = document.querySelector('.result')
  
      if (wins > loses) {
        result.style.color = 'green'
        result.textContent = 'You Win!'
      }
      else if (loses > wins) {
        result.style.color = 'red'
        result.textContent = 'You lose!'
      }
      else result.textContent = 'Tie!'
  
      gameOngoing = false
    } 
  }
}

// Get a random number for the computer
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return 'rock';
  else if (randomNumber === 1) return 'paper';
  else if (randomNumber === 2) return 'scissors';
}

function changeEmoji(playerSelecction, computerSelection) {
  let playerEmoji = document.querySelector('.playerChoice')
  let computerEmoji = document.querySelector('.computerChoice')
  
  if (playerSelecction === 'rock') {
    playerEmoji.textContent = '✊'
  } else if (playerSelecction === 'paper') {
    playerEmoji.textContent = '✋'
  } else if (playerSelecction === 'scissors') {
    playerEmoji.textContent = '✌️'
  }

  if (computerSelection === 'rock') {
    computerEmoji.textContent = '✊'
  } else if (computerSelection === 'paper') {
    computerEmoji.textContent = '✋'
  } else if (computerSelection === 'scissors') {
    computerEmoji.textContent = '✌️'
  }
}

// Choose the winner based on rock paper scissors rules
function playRound(playerSelecction, computerSelection) {
  if (playerSelecction === computerSelection) {
    console.log(`Tie! ${playerSelecction} ties with ${computerSelection}`);
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
