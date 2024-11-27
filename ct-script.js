//geting the HTML element
const countdownElement = document.getElementById
('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const inputHours = document.getElementById('inputHours');
const inputMinutes = document.getElementById('inputMinutes');
const inputSeconds = document.getElementById('inputSeconds');
const startButton = document.getElementById('button');

//variabel countdownInterval
let countdownInterval;

//function to start the timer
function startTimer(){
    //get the input from user
    let hours = parseInt(inputHours.value) || 0 ;
    let minutes = parseInt(inputMinutes.value) || 0 ;
    let seconds = parseInt(inputSeconds.value) || 0 ;


//convert total time into seconds
let totalTimeSeconds = hours * 3600 + minutes * 60 + seconds;

//if no time is input,stop the function
if (totalTimeSeconds <= 0){
    alert('Please enter a valid time');
    return
 }
 //clear the input after the timer display every seconds
 inputHours.value = ''; 
 inputMinutes.value = '';
 inputSeconds.value = '' ;

 //function to update the time display every seconds
 countdownInterval = setInterval(() => {
    //calculate remaining days, minutes and seconds
    const days = Math.floor(totalTimeSeconds/86400);
    const hors = Math.floor((totalTimeSeconds % 86400) / 3600);
    const minutes = Math.floor((totalTimeSeconds % 3600) / 60); 
    const seconds = Math.floor((totalTimeSeconds % 60));
 
 //update the HTML element display
 daysElement.textContent = days.toString().
 padStart(2,'0');
 hoursElement.textContent = hours.toString().
 padStart(2,'0');
 minutesElement.textContent = minutes.toString().
 padStart(2,'0');
 secondsElement.textContent = seconds.toString().
 padStart(2,'0');

 //decrease the total time by one seconds
 totalTimeSeconds--

 //stop the timer if time runs out
 if (totalTimeSeconds < 0 ){
    clearInterval(countdownInterval)
    alert("Time's up!")
   }

   },1000//miliseconds
  )
}

//add eventLiitener for the start button
startButton.addEventListener('click', () => {
    //stop any running timer
    clearInterval(countdownInterval) ;
    //start new timer
    startTimer();

})