const display = document.querySelector('#display');
const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');

const clear = document.querySelector('.clear');
const equal = document.querySelector('.equals');

let beforeValue = '';

numbers.forEach(button => button.addEventListener('click', function(e){        
    display.textContent += e.target.textContent;
})); 

operators.forEach(button => button.addEventListener('click', function(e){
    display.textContent += e.target.textContent;
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
