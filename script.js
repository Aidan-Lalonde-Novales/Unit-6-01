// JS that randomly generates a number from 1-6 and checks if the user guessed it correctly.

document.getElementById('submitbutton').addEventListener('click', guessChecker)

function guessChecker () {
  const guessedNumber = document.getElementById('userguess').value // Makes the value of the textbox into a variable
  const rolledNumber = Math.floor(Math.random() * 6) + 1 // Uses RNG to produce a number from 1-6
  if (guessedNumber == rolledNumber) {
    var result = 'Correct!'
  } else {
    var result = 'Incorrect. The correct answer was ' + rolledNumber + '.'
  }
  document.getElementById('result').innerHTML = result // replaces a textbox with the result of the guess
}
