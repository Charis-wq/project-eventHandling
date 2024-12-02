let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

//get element by HTML
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

function checkGuess(){
    const userGuess = Number(guessInput.value);
    //after check use guess, attempts ++
    attempts++

    if(userGuess === randomNumber){
        message.textContent = `Congratulations! You Guess the Numbers 
        ${randomNumber} correctly in${attempts} attempts`
        message.style.color = '#28a745'
        endGame()
    } else if(userGuess > randomNumber){
        message.textContent = 'To Hight! Try Again'
        message.style.color = '#dc3545'
    }else if(userGuess < randomNumber){
        message.textContent = 'To Low! Try Again'
        message.style.color = '#dc3545'
    }else{
        guessInput = ""
        guessInput.focus();
    }
}

    


function endGame(){
    guessInput.disable = true;
    guessButton.disable = true;
    restartButton.style.display = 'inline'
}

function resetGame(){
   attempts = 0;
   randomNumber = Math.floor(Math.random() * 100) + 1;
   guessInput.disable = false;
   guessButton.disable = false;
   message.textContent = 'Good Luck! Start Guessing...';
   message.style.color = '#333333';
   restartButton.style.display ='none';
   guessInput.focus();

}

//addeventlistener
guessButton.addEventListener('click', checkGuess);

restartButton.addEventListener('click', resetGame);

guessInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        checkGuess();
    }
})