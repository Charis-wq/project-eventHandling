//membuat object operator
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null 
}

//membuat function
function updateDisplay(){
    const display = document.querySelector('.calculator-display')
    display.value = calculator.displayValue 
}

function inputDigit(digit){
    const { displayValue, waitingForSecondOperand} = calculator 

    if (waitingForSecondOperand === true){
        calculator.displayValue = digit
        calculator.waitingForSecondOperand = false
    } else {
        calculator.displayValue = displayValue === '0' ?
        digit : displayValue + digit 
    }
    updateDisplay();
   
}

function inputDecimal(dot){
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot
    }
}

function handleOperator(nextOperator){
    const {firstOperand, diplayValue, operator} = calculator;
    const inputValue = persefloat(diplayValue);

    if(operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
        return
    }

    if( firstOperand === null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue;
    } else if (operator){
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue =`${parseFloat(result.toFixed(7))}`
        calculator.firstOperand = result;
    }else{
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
    
    }

    

    updateDisplay();
}

function calculate(firstOperand, inputValue, operator){
    if(operator === '+'){
        return firstOperand + inputValue;
    } else if (operator === '-'){
        return firstOperand - inputValue;
    } else if (operator === '*'){
        return firstOperand * inputValue;
    } else if (operator === '/'){
        return firstOperand / inputValue;
    } else if (operator === 'v'){
        return Math.sqrt(firstOperand);
    } else if (operator === '%'){
        return firstOperand / 100;
    }

    return secondOperand;
}

function resetCalculator(){
    calculator.displayValue ='0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    updateDisplay();
}

function handlEqual(){
    const {firstOperand, diplayValue, operator} = calculator;
    const inputValue = parseFloat(diplayValue);

    if( operator && !calculator.waitingForSecondOperand){
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue =`${parseInt(result.toFixed(7))}`;
        calculator.firstOperand = null;
        calculator.operator = null;
        calculator.waitingForSecondOperand = false;
        updateDisplay();

    }
}

document.querySelector('.calculator-keys').addEventListener
('click', (event) => {
    const {target} = event;

    if(target.matches('button')){
        return
    }

    if(target.classList.contains('operator')){
        handleOperator(target.value)
        return
    }    

    if(target.classList.contains('decimal')){
        inputDecimal(target.value)
        return
    }

    if(target.classList.contains('all-clear')){
        resetCalculator()
        return
    }

    if(target.classList.contains('equal-sign')){
        handlEqual()
        return
    }

    inputDigit(target.value);


})



