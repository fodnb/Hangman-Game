var night = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

var word = ['pumpkin', 'candy', 'skeleton', 'ghoul', 'goblin', 'costume', 'ghost', 'halloween', 'vampire', 'zombie','guilotene', 'trick', 'treat'];
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
// var word = [];
var wins = 0;
var losses = 0;
var chosenWord = word[Math.floor(Math.random() * word.length)];
console.log(night.length);
var guessguessed = 0;
var dashes;
var count = 0;
var differentNumbers;

function startGame() {

    answerArray = [];
    missArray = [];
    hitArray = [];
    chosenWord = word[Math.floor(Math.random() * word.length)];
    document.getElementById('start').innerHTML = "TRY YOUR LUCK AT HANGMAN!";
    console.log(chosenWord);


    for (var i = 0; i < chosenWord.length; i++) {
        answerArray[i] = "_";
    }
    var dashes = answerArray.toString();
    dashes = dashes.replace(/\,/g, " ");
       
    var wordLength = chosenWord.length;
    differentNumbers = wordLength;
    lettersinword();
    console.log(differentNumbers + "differentNumbers");
    correct = 0;
    wrong = 0;
    guessesRemaining = 6;
   
    document.getElementById("demo").innerHTML = answerArray.join("  ");
    console.log(typeof + dashes);
    console.log(typeof + answerArray);
    document.getElementById('misses').innerHTML = "ALPHABET GRAVEYARD";
    document.getElementById('tried').innerHTML = "You have " + guessesRemaining + " guesses!"
    document.getElementById('graveyard').innerHTML = missArray.join(" ");
}


// this fixes words with the same letter
function lettersinword() {
    var sameLetter = 0;
    for (var n = 0; n < chosenWord.length; n++) {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord.charAt(n) == chosenWord[i]) {
                sameLetter++;
                count++;
            } //ends 1st if statement

        } //ends first for statement
        i = 0;
        count = 0;

    } // ends second for statement
    console.log(sameLetter);
    differentNumbers = (sameLetter - chosenWord.length) / 2;// was 2
    console.log(sameLetter);
    differentNumbers = chosenWord.length - differentNumbers;
    console.log(differentNumbers);

} // ends function





function checkLetters() {

    for (var i = 0; i < chosenWord.length; i++) {
        if (userguess === chosenWord[i]) {
            answerArray[i] = userguess;
          
            document.getElementById("demo").innerHTML = answerArray.join("  ");
            correct++;

            console.log(night);



        } else if (userguess != chosenWord[i]) {
            wrong++;
        }
        if (wrong != chosenWord.length) {
            document.getElementById('start').innerHTML = "You got that one right!";
        } else if (wrong === chosenWord.length) {
            document.getElementById('start').innerHTML = "WRONG!";
            missArray.push(userguess);
            document.getElementById('misses').innerHTML = "THESE ARE YOUR MISSED OPPORTUNITY:";
            document.getElementById('graveyard').innerHTML = missArray.join(" ");
            guessesRemaining--;
            document.getElementById('tried').innerHTML = "You have " + guessesRemaining + " guesses left!";
            console.log(missArray);
        }
    }
    if (correct >= 1) {

        hitArray.push(userguess);
    }
    wrong = 0;
    correct = 0;
}

function handlerGuess() {

    if ((hitArray.length === chosenWord.length) || (differentNumbers === hitArray.length)) {//was differentletters

        document.getElementById('start').innerHTML = "You WON!";
        correct = 0;
        win++;
        guessesRemaining = 6;
        document.getElementById('wins').innerHTML = "You've Won: " + win + " times!";
        startGame();
    } else if (guessesRemaining === 0) {

        document.getElementById('start').innerHTML = "You LOSE";
        loss++;
        document.getElementById('losses').innerHTML = "You've Lost: " + loss + " times!";
        startGame();
    }
}

//need to find a way to check if a letter was guessed and if it was to get next guess
function checkArray(array) {
    for (var i = 0; i < array.length; i++) {
        if (userguess === array[i]) {
            guessguessed++;
        }
    }
}







startGame();

console.log(chosenWord);

document.getElementById('start').innerHTML = "Choose Your Letters Wisely!"

document.onkeypress = function(event) {
        guess = event.key;
        userguess = guess.toLowerCase();
        console.log(userguess);
        checkArray(night);


        if (guessguessed > 0) {
            guessguessed = 0;
            checkArray(answerArray);
            checkArray(hitArray);
            checkArray(missArray);
            console.log(guessguessed);



            if (guessguessed > 0) {
                guessguessed = 0;
            } else {

                // guess = event.key;
                // userguess = guess.toLowerCase();
                // console.log(userguess);
                checkLetters();
                console.log(answerArray);
                console.log()
                handlerGuess();
                console.log(missArray);
                console.log(hitArray);

            }
        }
    }
    // if it's in the alphabet.  go throught the array and check.  if it gets a hit
