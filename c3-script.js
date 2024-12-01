const screenDisplay = document.querySelector('.screen');
 const buttons = document.querySelectorAll('button')

console.log(buttons);

let calculation = []
let accumulationCalculaition

function calculate(button){
    
    const value = button.textContent;
    if ( value === 'Clear'){
        calculation = []
        screenDisplay.textContent = '0'
    }else if (value === '='){
        screenDisplay.textContent = eval(accumulationCalculaition)
    }else{
        calculation.push(value)
    accumulationCalculaition = calculation.join('')
   
    screenDisplay.textContent = accumulationCalculaition
}
    
   
    
}

buttons.forEach(button => button.addEventListener('click', () => calculate (button)));



