// We need a word bank of words for the user to guess
// We can probably use an array
// We probably want to randomize what word is selected to be guessed

// We need to turn the randomly selected word, into an array of dashes to display to the html for the user to see

// We need to create an onkeyup/onkeydown event listener for the user to guess the letters in the hidden word

// We need a way to track the letters guessed, and also if the guessed letters are in the hidden word

// We need to keep track of wins, losses, and remaining guesses

// We need a function to check if the user has won, lost or needs to contiue

// We need to continually display the game stats to the screen
// DRY - Don't Repeat Yourself 


var wordBank = ["elephants", "lions", "cows", "sheep", "giraffes", "rabbits", "monkeys", "birds", "frogs", "penguins"];
var randomWord;
var wins = 0;
var losses = 0;
var remainingGuesses;
var dashWord;
var referenceWord;
var dashArray;
var previouslyGuessedLetters;


function startGame() {

    previouslyGuessedLetters = [];

    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    remainingGuesses = 9;
    console.log(randomWord);

    referenceWord = randomWord.split('');

    //This is how we update the hidden letters. 
    dashArray = [];
    for (var i = 0; i < referenceWord.length; i++) {
        dashArray.push("_");
    }

    console.log(dashArray)
    //This makes the dashes more readable.


    console.log(referenceWord);

    displayToUser();

}

function displayToUser() {
    checkWinLoss();

    dashWord = dashArray.join(" ");

    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('guesses-left').textContent = remainingGuesses;
    document.getElementById("gameWord").textContent = dashWord;
    document.getElementById('prev-guessed-letters').textContent = previouslyGuessedLetters.join(" ");
}


document.onkeyup = function (bacon) {
    // console.log(bacon);
    var userGuess = bacon.key;
    console.log(userGuess)

    checkGuess(userGuess);

}

function checkWinLoss(){
    if(referenceWord.join("") == dashArray.join("")){
        wins++;
      return startGame();
    }

    if(remainingGuesses < 1){
        losses++;
       return startGame();
    }
    
}

function checkGuess(letter) {

    if (referenceWord.includes(letter)) {
        for (var y = 0; y < referenceWord.length; y++) {
            if (letter == referenceWord[y]) {
                dashArray[y] = letter;
            }
        }
        
        displayToUser();

    }
    else {

        if (previouslyGuessedLetters.includes(letter)) {
            alert("you've already guessed " + letter + "!");
            displayToUser();
        } else {

            previouslyGuessedLetters.push(letter);
            remainingGuesses--;
            displayToUser();
        }

    }

}






startGame();

