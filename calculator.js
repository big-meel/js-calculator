const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

const clear = document.querySelector('.clear');
const equal = document.querySelector('.equals');

const equation = [];

let displayValue = '';
let firstNumber;
let secondNumber;
let operand = '';

buttons.forEach(button => button.addEventListener('click', getEquation));

function runDisplay(){
    display.textContent = displayValue;
}


function add(a, b){
     return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x/y ;
}

function operate(op, x, y){
    switch(op){
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);       
    }
} 

function getEquation(e){
    const userInput = e.target.textContent;
    if(userInput === '+' || userInput === '-' || userInput === '/' || userInput === '*'){
        if(firstNumber && !(checkIfOperator(displayValue[displayValue.length-1]))){
            operand = userInput;
        }else getEquation(e);   //cancels entry if user enters multiple operators 
    }else if(firstNumber && operand){
        secondNumber += userInput;
    }else {
        firstNumber += userInput;
    }
    displayValue += userInput;
    runDisplay();
    if (e.target.textContent === "C"){
        clearScreen();
    }
}

function checkIfOperator(op){
    return op === '+' ? true : op === '-' ? true : op === '/' ? true : op === '*' ? 
    true : false
}

function clearScreen() {
    displayValue = '';
    display.textContent = '';
}