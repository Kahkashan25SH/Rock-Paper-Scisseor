
const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');
const resetButton = document.getElementById('reset');

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
};

const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        resultDisplay.innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}.<br>${result}`;
        resetButton.style.display = 'block'; // Show reset button
    });
});

resetButton.addEventListener('click', () => {
    resultDisplay.innerHTML = '';
    resetButton.style.display = 'none'; // Hide reset button
});
