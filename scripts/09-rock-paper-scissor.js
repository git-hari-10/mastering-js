// Function for the bot player
let computerMove = '';

function pickComputerMove()
{
    const randomno = Math.random();
    if(randomno >= 0 && randomno < 1/3)
        computerMove = 'rock';
    else if(randomno >= 1/3 && randomno < 2/3)
        computerMove = 'paper';
    else
        computerMove = 'scissor';
}

// Object to calculate total score
const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

function updatescoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses},Ties: ${score.Ties}`;
}

updatescoreElement();

function getMoveIcon(move) {
    if (move === 'rock') return '<i class="fa-solid fa-hand-back-fist"></i>';
    if (move === 'paper') return '<i class="fa-solid fa-hand"></i>';
    if (move === 'scissor') return '<i class="fa-solid fa-hand-scissors"></i>';
}

// Function for game logic
function gameLogic(playerMove)
{
    let result;
    if (playerMove === computerMove) {result = 'Tie';}
    else if (
        (playerMove === 'rock'    && computerMove === 'scissor') ||
        (playerMove === 'paper'   && computerMove === 'rock')    ||
        (playerMove === 'scissor' && computerMove === 'paper')
    ) {result = 'You win';}
    else {result = 'You lose';}

    // Update score
    if     (result === 'You win')  {score.Wins += 1;}
    else if(result === 'You lose') {score.Losses += 1;}
    else if(result === 'Tie')      {score.Ties += 1;}

    //store player move in local storage
    localStorage.setItem('score', JSON.stringify(score));

    updatescoreElement();

    document.querySelector('.js-moves')
        .innerHTML =  `You ${getMoveIcon(playerMove)} &nbsp;&nbsp;${getMoveIcon(computerMove)} Computer`;

    document.querySelector('.js-result').innerHTML = result;
}