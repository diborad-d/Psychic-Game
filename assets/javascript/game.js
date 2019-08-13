const wordList = ['Canada','Algeria','Ethiopia', 'Greece'];
const hint = ['The 2 main languages spoken in Canada are English and French.','It is the largest country in Africa','Addis Ababa, is the capital city of this country.',
'The offcial name of this country is Hellenic Republic.'];

// document.onkeypress = printCurrentWord;
// document.onkeypress = function () { printCurrentWord };
// document.onkeypress = function () { document.getElementById('currentWord').innerText = "Joe is nice"; };

window.onload = function () {
  document.onkeypress = printCurrentWord;
  // document.onkeypress = printCurrentWord;
}
function printCurrentWord (){
   document.getElementById('currentWord').innerText =  "Current word : " + getRandomWord();
}    
   
function getRandomWord() {
 return wordList[getRandomIndex()];
} 

function getRandomIndex() {
  return getRandomInt(wordList.length-1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
 

// const gameCode = {
//   Wins = 0,
//   lives = 10,
//   currentWord: [],
//   currentWord : [],
//   lettersGuessedWrong: [],
//   hint :[],

// }

  // function getRandomNumber() {
  //   return Math.floor(Math.random()+ 1);
  // };

//   function getNewWord() {
//      const z = this.getRandomNumber(wordsToGuessFrom.length);
//      this.currentWord.push(wordsToGuessFrom[z]);
//      this.factOfCurrentWord.push(facts[z]);
//      for (let i = 0; i < this.currentWord[0].length; i++) {
//        this.currentWord.push('-');
//       }
//     };

//  function(guessLetterchar) {
//   if (this.currentWord[0].includes(char.toLowerCase())) {
//       for (let i = 0; i < this.currentWord[0].length; i++) {
//           if (this.currentWord[0][i]==char) {
//               this.currentWordPublic[i] = char;
//           }
//       }
//   } else if (this.lettersGuessedWrong.includes(char)) {
//       console.log('Already guessed that letter, you have.');
//   } else {
//       this.lettersGuessedWrong.push(char);
//       this.livesLeft--;
//   }
// };