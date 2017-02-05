 var word = ['pumpkin', 'candy', 'skeleton', 'ghoul', 'goblin', 'costume'];
 var win = 0;
 var loss = 0;

 var x = 0;
 var hitArray = [];
 var missArray = [];
 var guessesRemaining = 6;
 var correct = 0;
 var wrongGuesses;
 var answerArray = [];
 var missArray = [];
 var wins = 0;
 var losses = 0;
var chosenWord = word[Math.floor(Math.random() * word.length)];

 function startGame() {
    answerArray = [];
    chosenWord = word[Math.floor(Math.random() * word.length)];
     document.getElementById('start').innerHTML = "TRY YOUR LUCK AT HANGMAN!";

     console.log(chosenWord);
     for (var i = 0; i < chosenWord.length; i++) {
         answerArray[i] = "_";
     }
     var dashes = answerArray.toString();
     dashes = dashes.replace(/\,/g, " ");
     var wordLength = chosenWord.length;
     correct = 0;
     wrong = 0;
     guessesRemaining = 6;
     missArray = [];
    hitArray = [];
     document.getElementById("demo").innerHTML = answerArray;

     console.log(typeof + dashes);
     console.log(typeof + answerArray);
     document.getElementById('misses').innerHTML = "ALPHABET GRAVEYARD";
 }



 function checkLetters() {

     for (var i = 0; i < chosenWord.length; i++) {
         if (userguess === chosenWord[i]) {
             answerArray[i] = userguess;

             document.getElementById("demo").innerHTML = answerArray;
             correct++;

                
             // for (var i = 0; i <= hitArray.length; i++) {
             //        if (userguess != hitArray[i]) {
             //          hitArray.push(userguess);   
             //        }           
             // }
            
         } 
         else if (userguess != chosenWord[i]) {
             wrong++;
         }
         if (wrong != chosenWord.length) {
             document.getElementById('start').innerHTML = "You got that one right!";
         } else if (wrong === chosenWord.length) {
             document.getElementById('start').innerHTML = "WRONG!";
             missArray.push(userguess);
             document.getElementById('misses').innerHTML = "THESE ARE YOUR MISSED OPPORTUNITY" + missArray;
             guessesRemaining--;
             document.getElementById('tried').innerHTML = "You have " + guessesRemaining + " guesses left!";
             console.log(missArray);
         }
     }
     wrong = 0;
     correct = 0;
 }

 function handlerGuess() {

     if (hitArray.length === chosenWord.length) {

         document.getElementById('start').innerHTML = "You WON!";
         correct = 0;
         win++;
         document.getElementById('wins').innerHTML = "You've Won: " + win + " times!";
         startGame();
     } else if (guessesRemaining === 0) {

         document.getElementById('start').innerHTML = "You LOSE";
         loss++;
         document.getElementById('losses').innerHTML = "You've Lost: " + loss + " times!";
         startGame();
     }



 }





startGame();

console.log(chosenWord);

 document.getElementById('start').innerHTML = "Choose Your Letters Wisely!"
 document.onkeypress = function(event) {

     guess = event.key;
     userguess = guess.toLowerCase();
     console.log(userguess);
     checkLetters();
     console.log(answerArray);
     console.log()
     handlerGuess();
    console.log(missArray);
    console.log(hitArray);
 }
