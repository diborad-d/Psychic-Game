const wordList = ["CANADA", "ALGERIA", "ETHIOPIA", "GREECE"];
const hintList = [
  "The 2 main languages spoken in this country are English and French.", 
  "It is the largest country in Africa", "Addis Ababa, is the capital city of this country.",
   "The official name of this country is Hellenic Republic."
  ];

let currentIndex = getRandomIndex();
let lettersGuessed = [];
let incorrectGuesses = [];
let guessesRemaining = 10;
let losses = 0;
let wins = 0;

window.onload = function() {
  myInstructions();
  setup();
  registerEvents();
}
function registerEvents(){
  hint.onclick = showHint;
  $("#reset_btn").on("click", function() {
    setup();
 });
 document.onkeyup = function(ev) {
  gameFunction(ev.keyCode);
};

}

function setup() {
  currentIndex = getRandomIndex();

  document.getElementById("currentWord").innerText = "Current Word: " + getCurrentWordWithAllDashes();
  document.getElementById("wins").innerText = "Wins: " + wins;
  document.getElementById("losses").innerText = "Losses: " + losses;
  document.getElementById("hint").innerText = "Hint: click here to reveal hints ";
  document.getElementById("guessesRemaining").innerText = "Guesses remaining: " + 10;
  document.getElementById("incorrectGuesses").innerText = "Incorrect Guesses: " + 0;
}

function myInstructions() {
  alert("Instructions" + "\n" + "- The theme of the game is names of counties around the globe." + "\n" + "- Click on 'Hint' to reveal fun facts about each country." + "\n" + "- You have 10 tries." + "\n" + "- Have fun!!");
}
function showHint() {
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
function gameFunction(keyCode) {
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
    document.getElementById("incorrectGuesses").innerText = "Incorrect Guesses: " + incorrectGuesses;
    document.getElementById("guessesRemaining").innerText = " Guesses remaining: " + --guessesRemaining;
  }
  //game over/losses
  if (guessesRemaining == 0) {
    alert("Game Over");
    document.getElementById("loseSound").play();
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
  if (!currentWord.includes("_")) {
    alert("Congratulations! You Won!");
    document.getElementById("winSound").play();
    document.getElementById("wins").innerText = "Wins: " + ++wins;
  }
}

  


