$(document).ready(function() {

      
    var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
 // Create an array of words
var game = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    
    ];
    /*
    var choice = words[Math.floor(Math.random() * 4)];
    var answer = game [choice];
    var myLength = answer.length;
    var display=[myLength];
    var win = myLength;
    var attemptsLeft = 10;
    var output="";
    var userLetter="";

    var setup = function(){
        for (var i=0; i<answer.length;i++){
            display[i] = " _ ";
            output = output + display[i];
        }
        document.getElementById("game").innerHTML = output;
        output ="";
    }
 var submit = function(){
     output = "";
     userLetter=$("letter").value;
     $("letter").value ="";

     for (var c=0; c<answer.length; c++){
         alert(letters[c]);
     }
 }

    */
    for (var i = 0; i < letters.length; i++) {
     if(answer == guess){
         alert("you Guessed Correctly!");
         break;
     }else{
         guess = prompt("Sorry Try Again");
     }



      var letterBtn = $("<button>");

      
      letterBtn.addClass("letter-button letter letter-button-color");

     
      letterBtn.attr("data-letter", letters[i]);

     
      letterBtn.text(letters[i]);

      
      $("#buttons").append(letterBtn);

    }

    
    $(".letter-button").on("click", function() {

     
      var lettersGuess = $("<div>");

     
      lettersGuess.addClass("letter lettersGuess-color");

      lettersGuess.text($(this).attr("data-letter"));

      
      $("#display").append(lettersGuess);

    });

    
    $("#clear").on("click", function() {

      $("#display").empty();

    });

  });
  