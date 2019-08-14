const newArgument = document.createElement('div');
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let getExpressions = display.textContent; 

buttons.forEach(button => button.addEventListener('click', function(e){
    e = e.target;
    if(e.classList[0]){
        display.textContent += ' ' + e.textContent + ' ';
    } else {    
    getExpressions = display.textContent += e.textContent;
    }
}));

    


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
