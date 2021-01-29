let min = 1,
  max = 10,
  winningNumber = 2,
  guessesLeft = 3;

const gameWrapper = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guessBtn');
const guessInput = document.querySelector('#guessInput');

const gameMessage = document.querySelector('.gameMessage');

//   Assigning min and max to the UI
minNum.innerText = min;
maxNum.innerText = max;

guessBtn.addEventListener('click', function () {
  // debugger
  let userGuess = parseInt(guessInput.value);
  //   checking if guess is populated
  if (isNaN(userGuess) || userGuess < min || userGuess > max) {
    let message = 'Please check your values';
    setMessage(message, 'red');
    return
  }
  //   checking if guess is right
  if (userGuess === winningNumber) {
   
    let message = `Congratulations, you won! The right number was ${winningNumber}`;
    let won = true
    // guessInput.disabled = true;
    // guessInput.style.borderColor = 'green';
    setMessage(message, 'green');
  } else {
      guessesLeft -= 1;

    if (guessesLeft === 0) {
      // guessInput.disabled = true;
      let won = false
      // guessInput.style.borderColor = 'red';
      let message = `Sorry, YOU LOSE! The correct number was ${winningNumber}`;
      setMessage(message, 'red');
    } else {
      let message = `The number you entered is wrong. You have ${guessesLeft} left`;
      setMessage(message, 'red');
      guessInput.value = '';
    }
  }
});




//   Displaying Message
function setMessage(msg, color) {
  gameMessage.textContent = msg;
  gameMessage.style.color = color;
  gameMessage.classList.add('active');
  
}


function checkGameOver (status, msg, color){
  status === true ? color = 'green' : color = 'red'
  guessInput.disabled = true;



}