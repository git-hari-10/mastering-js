let intervalId;
let isAutoplay = false;
// Store computer move globally
let computerMove = '';

// Score object (Save to localStorage)
const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

// Updates the score display on the UI
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}
updateScoreElement();

// Reset Score Event Listener
document.querySelector('.reset').addEventListener('click', () => {
    // Clear the score object
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;

    // Remove from localStorage
    localStorage.removeItem('score');

    updateScoreElement();
});


// Returns a random move: 'rock', 'paper', or 'scissor'
function pickRandomMove() {
    const randomNo = Math.random();
    if (randomNo < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNo < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissor';
    }
    return computerMove;
}

// Handles the autoplay logic
function autoPlay() {
    if (!isAutoplay) {
        intervalId = setInterval(() => {
            const playerMove = pickRandomMove(); // Both moves are random in autoplay
            const computerMove = pickRandomMove();
            gameLogic(playerMove, computerMove);
        }, 1000);

        document.querySelector('.autoPlay').innerHTML = 'Stop';
    } else {
        clearInterval(intervalId);
        document.querySelector('.autoPlay').innerHTML = 'AutoPlay';
    }

    isAutoplay = !isAutoplay;
}

// Returns the icon HTML for a move
function getMoveIcon(move) {
    if (move === 'rock') return '<i class="fa-solid fa-hand-back-fist"></i>';
    if (move === 'paper') return '<i class="fa-solid fa-hand"></i>';
    if (move === 'scissor') return '<i class="fa-solid fa-hand-scissors"></i>';
}

// Handles the main game logic and updates UI and score
function gameLogic(playerMove, compMove = pickRandomMove()) {
    let result;

    // Determine outcome
    if (playerMove === compMove) {
        result = 'Tie';
    } else if (
        (playerMove === 'rock' && compMove === 'scissor') ||
        (playerMove === 'paper' && compMove === 'rock') ||
        (playerMove === 'scissor' && compMove === 'paper')
    ) {
        result = 'You win';
    } else {
        result = 'You lose';
    }

    // Update the score
    if (result === 'You win') {
        score.Wins++;
    } else if (result === 'You lose') {
        score.Losses++;
    } else {
        score.Ties++;
    }

    // Save to localStorage
    localStorage.setItem('score', JSON.stringify(score));

    // Update UI
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML =
        `You ${getMoveIcon(playerMove)} &nbsp;&nbsp;${getMoveIcon(compMove)} Computer`;
}

// Button click events
document.querySelector('.js-rock').addEventListener('click', () => {
    const compMove = pickRandomMove();
    gameLogic('rock', compMove);
});

document.querySelector('.js-paper').addEventListener('click', () => {
    const compMove = pickRandomMove();
    gameLogic('paper', compMove);
});

document.querySelector('.js-scissor').addEventListener('click', () => {
    const compMove = pickRandomMove();
    gameLogic('scissor', compMove);
});

// Keyboard shortcuts: r (rock), p (paper), s (scissor)
document.body.addEventListener('keydown', (event) => {
    let playerMove = null;

    if (event.key === 'r') {
        playerMove = 'rock';
    } else if (event.key === 'p') {
        playerMove = 'paper';
    } else if (event.key === 's') {
        playerMove = 'scissor';
    }

    if (playerMove) {
        const compMove = pickRandomMove();
        gameLogic(playerMove, compMove);
    }
});
