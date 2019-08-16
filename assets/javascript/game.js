const wordList = ["CANADA", "ALGERIA", "ETHIOPIA", "GREECE"];
const hintList = [
  "The 2 main languages spoken in this country are English and French.",
  "It is the largest country in Africa",
  "Addis Ababa, is the capital city of this country.",
  "The official name of this country is Hellenic Republic."
];

let currentIndex = getRandomIndex();
let lettersGuessed = [];
let incorrectGuesses = [];
let guessesRemaining = 10;
let losses = 0;
let wins = 0;

window.onload = function() {
  setup();
  document.onkeyup = function(ev) {
    myFunction(ev.keyCode);
  };
  hint.onclick = myHint;
};

function setup() {
  currentIndex = getRandomIndex();

  document.getElementById("currentWord").innerText = "Current Word: " + getCurrentWordWithAllDashes();
  document.getElementById("wins").innerText = "Wins: " + wins;
  document.getElementById("losses").innerText = "Losses: " + losses;
  document.getElementById("hint").innerText = "Hint: click here to reveal hints ";
  document.getElementById("guessesRemaining").innerText = "Guesses remaining: " + 10;
  document.getElementById("incorrectGuesses").innerText ="Incorrect Guesses: " + 0;
}

function myHint() {
  document.getElementById("hint").innerText = "Hint: " + hintList[currentIndex];
}
function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(wordList.length - 1));
}
function getCurrentWordWithAllDashes() {
  let currentWord = wordList[currentIndex].split("");

  for (let i = 0; i < currentWord.length; i++) {
    currentWord[i] = "_";
  }
  currentWord = currentWord.join(" ");
  return currentWord;
}
function myFunction(keyCode) {
  const letter = String.fromCharCode(keyCode).toUpperCase();
  if (keyCode < 65 || keyCode > 90) {
    return;
  }
  if (lettersGuessed.includes(letter)) {
    return;
  }
  lettersGuessed.push(letter);
  console.log(letter);
  let currentWord = wordList[currentIndex].split("");

  if (!currentWord.includes(letter)) {
    incorrectGuesses.push(letter);
    document.getElementById("incorrectGuesses").innerText =
      "Incorrect Guesses: " + incorrectGuesses;
    document.getElementById("guessesRemaining").innerText =
      " Guesses remaining: " + --guessesRemaining;
  }
  //game over/losses
  if (guessesRemaining == 0) {
    alert("Game Over");
    document.getElementById("loseSound").play();
    document.getElementById("crush.gif").play();

    document.getElementById("losses").innerText = "Losses: " + ++losses;
  }
  for (let i = 0; i < currentWord.length; i++) {
    if (!lettersGuessed.includes(currentWord[i])) {
      currentWord[i] = "_";
    }
  }
  currentWord = currentWord.join(" ");
  document.getElementById("currentWord").innerText = "Current Word: " + currentWord;
//WINS
    if (!currentWord.includes("_")){
      alert("Congratulations! You Won!");
      document.getElementById("dance.gif").play();

      document.getElementById('winSound').play();
      document.getElementById("wins").innerText = "Wins: " + ++wins;
    }

}
resetGame: function reset(){
window.onload = setup();
currentIndex = getRandomIndex();
lettersGuessed = [];
incorrectGuesses = [];
guessesRemaining = 10;
losses = 0;
wins = 0;
this.updateDOM();
this.getCurrentWord();
this.resetCondition = false;
}

