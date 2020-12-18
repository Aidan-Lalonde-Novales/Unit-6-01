// JS that randomly generates a number from 1-6 and checks if the user guessed it correctly.

document.getElementById('submitbutton').addEventListener('click', guessChecker)

function guessChecker () {
  const preRolledNumber = Math.floor(Math.random() * 6) + 1 // Uses RNG to produce a number from 1-6
  const preGuessedNumber = document.getElementById('userguess').value // Makes the value of the textbox into a variable
  const rolledNumber = parseInt(preRolledNumber) // Converts to interger
  const guessedNumber = parseInt(preGuessedNumber) // Converts to interger
  if (guessedNumber === rolledNumber) {
    document.getElementById('result').innerHTML = 'Correct!'
  } else if (guessedNumber >= 7) {
    document.getElementById('result').innerHTML = 'Really?'
  } else if (guessedNumber <= 0) {
    document.getElementById('result').innerHTML = 'Really?'
  } else {
    document.getElementById('result').innerHTML = 'Incorrect. The correct answer was ' + rolledNumber + '.'
  }
}
