const hint = document.getElementById("hint");
const noOfGuessesRef = document.getElementById("no-of-guesses");
const guessedNumsRef = document.getElementById("guessed-nums");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");


let answer, noOfGuesses, guessedNumsArr;


const play = () => {
    console.log("called the play");
};


checkButton.addEventListener("click", play);