const wordList = ['Canada','Algeria','Ethiopia', 'Greece'];
const hintList = ['The 2 main languages spoken in Canada are English and French.','It is the largest country in Africa','Addis Ababa, is the capital city of this country.',
'The official name of this country is Hellenic Republic.'];


// let remainingLives = 10;
// let lettersGuessed = [];

// let wins = 0;
// let losses = 0;

// let start = [];
// let currentWord = [];

// let secretWordDOM =  document.getElementById('remaininglives');
// let lettersGuessedDOM = document.getElementById('#lettersGuessed');

// let winsDOM = document.getElementById('#wins');
// let lossesDOM = document.getElementById('#losses');

// let startDOM = document.getElementById('#start');
// let currentWordDOM = document.getElementById('#currentWord');





function printCurrentWord (){
     document.getElementById('currentWord').innerText =  "Current words : " + wordList[i]; 
  }

 
 
 





function currentWord() { 
  return Math.floor(Math.random() * Math.floor(wordList.length-1));

};
function setup(){
  
 
}
 console.log(currentWord);




// document.onkeypress = printCurrentWord;
// document.onkeypress = function () { printCurrentWord };
// document.onkeypress = function () { document.getElementById('currentWord').innerText = "Joe is nice"; };

window.onload = function () {   //press any key to get started 
  // document.onkeypress = printCurrentWord;
}



  // currentIndex = ...;
  // currentWOrd = ...;
  // hint = ...;

// function printCurrentWord (){
//    document.getElementById('currentWord').innerText =  "Current words : " + wordList[currentIndex]; 
// }

 function currentWord() {
  // let i = this.getRandomWord(wordList.length);
  // this.currentWord.push(wordList[i]);
  // this.factOfCurrentWord.push(facts[i]);
  // for (let i = 0; i < this.currentWord[0].length; i++) {
    this.currentWord.push('_');
   }
 




// }

  // function getRandomNumber() {
  //   return Math.floor(Math.random()+ 1);
  // };

  

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