const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

const clear = document.querySelector('.clear');
const equal = document.querySelector('.equals');

const equation = [];

let displayValue = '';
let heldNumber = '';
let operand = '';

buttons.forEach(button => button.addEventListener('click', getEquation));

function runDisplay(char){
    display.textContent += char;
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
    if(!(checkIfOperator(userInput))){
        runDisplay(userInput);
        heldNumber += userInput;
    }else if(checkIfOperator(userInput)){
        runDisplay(userInput);
        equation.push(heldNumber);
        equation.push(userInput);
        heldNumber = '';
    }
    
}


function checkIfOperator(op){
    return op === '+' ? true : op === '-' ? true : op === '/' ? true : op === '*' ? 
    true : op === '=' ? true : false;
}

function clearScreen() {
    display.textContent = '';
}

function equalsTo(arr){
    //Determines the operator with the highest presedence
    const presedence = (op) => { return (op === '*' || op === '/') ? 2 : op === '-' || 
        op === '+' ? 1 : 0; }
    /*for (i = 0; i < arr.length; i++){
        if(checkIfOperator(arr[i])){
            if(presedence(arr[i]) === 2){

            }
        }
    } */  
}