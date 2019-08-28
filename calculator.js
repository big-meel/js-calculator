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
    
    const multiplication = (op) => {
        for (i = 0; i < op.length; i++){
            currentItem = arr[i];
            if (currentItem === '*'){
                leftVal = parseFloat(arr[i-1]);
                rightVal = parseFloat(arr[i+1]);
                result = operate(currentItem, leftVal, rightVal);

                arr[i-1] = result;
                arr.splice(i, 2);
            }
        }
    }

    const division = (op) => {
        for (i = 0; i < op.length; i++){
            currentItem = arr[i];
            if (currentItem === '/'){
                leftVal = parseFloat(arr[i-1]);
                rightVal = parseFloat(arr[i+1]);
                result = operate(currentItem, leftVal, rightVal);

                arr[i-1] = result;
                arr.splice(i, 2);
            }
        }
    }

    const addition = (op) => {
        for (i = 0; i < op.length; i++){
            currentItem = arr[i];
            if (currentItem === '+'){
                leftVal = parseFloat(arr[i-1]);
                rightVal = parseFloat(arr[i+1]);
                result = operate(currentItem, leftVal, rightVal);

                arr[i-1] = result;
                arr.splice(i, 2);

            }
        }
    }

    const subtraction = (op) => {
        for (i = 0; i < op.length; i++){
            currentItem = arr[i];
            if (currentItem === '-'){
                leftVal = parseFloat(arr[i-1]);
                rightVal = parseFloat(arr[i+1]);
                result = operate(currentItem, leftVal, rightVal);

                arr[i-1] = result;
                arr.splice(i, 2);

            }
        }
    }

    multiplication(arr);
    division(arr);
    addition(arr);
    subtraction(arr);
    
    return arr[0];
}