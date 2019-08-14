const wordList = ['Canada','Algeria','Ethiopia', 'Greece'];
const hintList = ['The 2 main languages spoken in Canada are English and French.','It is the largest country in Africa','Addis Ababa, is the capital city of this country.',
'The official name of this country is Hellenic Republic.'];

window.onload = function () {
    setup();
}

function setup() {
    document.getElementById("currentWord").innerText = "Current Word: " + wordList[currentIndex()];
}

function currentIndex() { 
  return Math.floor(Math.random() * Math.floor(wordList.length-1));
}



