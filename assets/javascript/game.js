const wordList = ['Canada','Algeria','Ethiopia', 'Greece'];
const hintList = ['The 2 main languages spoken in this country are English and French.','It is the largest country in Africa','Addis Ababa, is the capital city of this country.',
'The official name of this country is Hellenic Republic.'];

let currentIndex = getRandomIndex();
let currentGuesses = [];

window.onload = function () {
    setup();
}

function setup() {
  currentIndex = getRandomIndex();

  document.getElementById("currentWord").innerText = "Current Word: " + getCurrentWordWithAllDashes();
  document.getElementById("wins").innerText = "Wins: " + 0;
  document.getElementById("losses").innerText = "Losses: " + 0;
  document.getElementById("hint").innerText = "Hint: " + hintList[currentIndex];
  document.getElementById("guessesRemaining").innerText = "Guesses remaining: " + 10;
  document.getElementById("incorrectGuesses").innerText = "Incorrect Guesses: " + "N/A";
}

function getRandomIndex() { 
  return Math.floor(Math.random() * Math.floor(wordList.length-1));
}

function getCurrentWordWithAllDashes() {
   let currentWord = wordList[currentIndex].split('');

   for (let i = 0; i < currentWord.length; i++) {
     currentWord[i] = "_";
  }
  currentWord = currentWord.join(' ');
  return currentWord;
}
     
