const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

const clear = document.querySelector('.clear');
const equal = document.querySelector('.equals');

let equation = [];

let heldNumber = '';
let operand;
let result;

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
    let userInput = e.target.textContent;

    if(!(checkIfOperator(userInput))){
        if(userInput ==="." && heldNumber.includes(".")){
                userInput = '';
        }
        if(result && !(operand)){
            //display.textContent = '';
            //equation = [];
            result = undefined;
        }

        runDisplay(userInput);

        operand = undefined;
        heldNumber += userInput;
    }else if(checkIfOperator(userInput)){ //If user enters operator 
        if(!(operand) && userInput !== "="){                   //current number is added to array  
            operand = userInput;
            if(heldNumber !== ''){
                equation.push(heldNumber);
            }
            equation.push(userInput);

            runDisplay(userInput);

            heldNumber = '';    
        }else  heldNumber += '';   
    }    

    if(userInput === '=' && !(operand) && heldNumber){  //Evaluates equation if user selects '='

    equation.push(heldNumber);
    equalsTo(equation);

    display.textContent = '';

    if(equation[0] === Infinity || equation[0] === -Infinity){
        alert("WARNING!!! You are playing with forces beyond your control! (Division by zero)");
        clearScreen();
    }else 
    runDisplay(equation[0]);
    
    result = equation[0];
    heldNumber = '';   
    }  

    if(userInput === 'C'){
        clearScreen();
    }
    if(userInput === 'Backspace'){
        backspace();
    }
    
}

function checkIfOperator(op){
    return op === '+' ? true : op === '-' ? true : op === '/' ? true : op === '*' ? 
    true : op === '=' ? true : false;
}

function backspace(){
    let current = display.textContent;
    let newDisplay = current.slice(0, (current.indexOf('B')) );
    newDisplay = newDisplay.slice(0, -1); 
    
    display.textContent = '';

    runDisplay(newDisplay);
    
    

    let endNumber = equation[equation.length - 1] 

    if (heldNumber === 'Backspace'){
		heldNumber = ""
		if (endNumber){
			equation[equation.length - 1] = endNumber.slice(0, -1)
            if( !( equation[equation.length - 1] ) ){
                equation.pop();
            }
		}
    } else if(heldNumber){
		heldNumber = heldNumber.slice(0, (heldNumber.indexOf('B')));
        heldNumber = heldNumber.slice(0, -1);
    }
}

function clearScreen() {
    display.textContent = '';
    equation = [];
    heldNumber = '';
}

function equalsTo(arr){
    
    const evaluate = (op, eq) => {
        for (i = 0; i < eq.length; i++){
            currentItem = arr[i];
            if (currentItem === op){
                leftVal = parseFloat(arr[i-1]);
                rightVal = parseFloat(arr[i+1]);
                result = operate(currentItem, leftVal, rightVal);

                arr[i-1] = result;
                arr.splice(i, 2);
            }
        }
    }
    
    evaluate('*', arr) || evaluate('/', arr);
    evaluate('+', arr) || evaluate('-', arr);

    return arr[0];
}