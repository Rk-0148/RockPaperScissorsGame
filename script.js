function RockPaperScissorsGame() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let userScore = 0;
  let computerScore = 0;

  while (true) {
    let userChoice = prompt('Choose either Rock, Paper, or Scissors (or type "exit" to end the game):');

    if (userChoice === 'exit') {
      break;
    }

    if (!choices.includes(userChoice)) {
      alert('Invalid choice! Please choose Rock, Paper, or Scissors.');
      continue;
    }

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    alert('Computer chose: ' + computerChoice);

    let result = '';

    if (userChoice === computerChoice) {
      result = 'It\'s a tie!';
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper') ||
      (userChoice === 'Paper' && computerChoice === 'Rock')
    ) {
      result = 'You win!';
      userScore++;
    } else {
      result = 'You lose!';
      computerScore++;
    }

    alert(result + '\n\nScores:\nUser: ' + userScore + '\nComputer: ' + computerScore);
  }

  alert('Game over!\nFinal Scores:\nUser: ' + userScore + '\nComputer: ' + computerScore);
  alert('Thanks for playing! Goodbye.');
}

RockPaperScissorsGame();
