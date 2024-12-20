const textTypeElement = document.getElementById('text-to-type');
const textToType = textTypeElement.innerHTML.split(' ');
const userInput = document.getElementById('user-input');
const startButton = document.getElementById('start-button');
const timeDisplay = document.getElementById('time');
const wpmDisplay = document.getElementById('words-per-minute');

let startTime;
let timerInterval;

function startTest() {
    startTime = new Date();
    userInput.value = '';
    userInput.focus();
    timerInterval = setInterval(updateTimer, 1000);
    textTypeElement.innerHTML = textToType.map(word => `<span>${word}</span>`).join(' ');
   
}

function updateTimer() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    timeDisplay.innerHTML = elapsedTime;
}

function calculateWPM() {
    const wordsTyped = userInput.value.trim().split(/\s+/).length;
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    const minutes = elapsedTime / 60;
    const wpm = minutes > 0 ? Math.floor(wordsTyped / minutes) : 0;
    wpmDisplay.innerHTML = wpm;
   
}
function checkInput() {
    const typedText = userInput.value.trim().split(' ');
    const spans = textTypeElement.querySelectorAll('span');
    typedText.forEach((word, index) => {
        if (spans[index]) {
            spans[index].className = word === textToType[index] ? 'correct' : 'incorrect';
        }
    });
    for (let i = typedText.length; i < spans.length; i++) {
        spans[i].className = '';
    }
}

function stopTest() {
    clearInterval(timerInterval);
    calculateWPM();
    
}

startButton.addEventListener('click', () => {
    console.log("Start button clicked.");
    startTest();
});

userInput.addEventListener('input', () => {
    checkInput();
    const typedText = userInput.value.trim();
    if (typedText === textToType.join(' ')) {
        stopTest();
    }
});
