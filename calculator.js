const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

const clear = document.querySelector('.clear');
const equal = document.querySelector('.equals');

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
    let result;
    switch(op){
        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case '/':
            result = divide(x, y);
            break;        
    }
    return result;
} 

function getEquation(e){
    const userInput = e.target.textContent;
    if(userInput === '+' || userInput === '-' || userInput === '/' || userInput === '*'){
        if(firstNumber){
            operand = userInput;
        }    
    }else if(firstNumber && operand){
        secondNumber += userInput;
    }else {
        firstNumber += userInput;
    }
    displayValue += userInput;
    runDisplay();
}