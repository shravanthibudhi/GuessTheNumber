/**
 * Guess The Number Game
 * 1. Get user value from input and save it to variable numberGuess
 * 2. Generate a random number 1 to 100 and save it to variable correctNumber
 * 3. Console whether the guess is too high, too low, or is correct inside playGame function
 * 4. Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * 5. Complete the showYouWon, showNumberAbove, showNumberBelow
 * 6. Use the showYouWon... functions within displayResult to display the correct dialog
 * 7. Save the guess history in a variable called guess
 * 8. Display the guess history using displayHistory() function
 * 9. Use the initGame() function to restart the game
 */ 

// Variable to store the list of guesses
let guesses = [];

// Variable for store the correct random number 
let correctNumber = getRandomNumber();

window.onload = function() {
    initGame()
    document.getElementById("number-submit").addEventListener("click", playGame)
    document.getElementById("restart-game").addEventListener("click", initGame)
}


// Functionality for playing the whole game

function playGame(){
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess)
  saveGuessHistory(numberGuess)
  displayHistory()
}

// Return a random number between 1 and 100

function getRandomNumber(){
  return Math.floor((Math.random() * 100) + 1)
}

// Save guess history from user input

function saveGuessHistory(guess) {
  guesses.push(guess)
}

/**
 * Display guess history to user in HTML
 * HTML:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 */
function displayHistory() {
  let index = guesses.length - 1; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while(index >= 0){
    list += "<li class='list-group-item'>" + 
    "You guessed " + guesses[index] + "</li>";
    index-=1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

// Show the result for if the guess it too high, too low, or correct 

function displayResult(numberGuess){
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else if (numberGuess == correctNumber) {
    showYouWon();
  } 
}

// Retrieve the dialog based on if the guess is wrong or correct

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog("warning", text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog("warning", text)
  document.getElementById("result").innerHTML = dialog;
}

/**
 * Initialize a new game by resetting all values and content on the page 
 * Reset the correctNumber
 * Reset the result display
 * Reset the guesses array
 * Reset the guess history display
 */

function initGame(){
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses =[];
  displayHistory();
}