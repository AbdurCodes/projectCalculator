const display = document.querySelector('.display');

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function modulo(num1, num2){
    return num1 % num2;
}

function operate(num1, operator, num2){
    if (operator === '+') return add(num1, num2)
    else if (operator === '-') return subtract(num1, num2)
    else if (operator === '/') return divide(num1, num2)
    else if (operator === '*') return multiply(num1, num2)
    else if (operator === '%') return modulo(num1, num2)
}

let number1 = 0;
let number2 = 0;
let operatorEntered = '';

function numBtnClicked(num) {
    // let exclude = ['0', '+', '-', '/', '*', '%'];
    // if (exclude.includes(display.textContent)) {
    //     display.textContent = '';
    // }
    // display.textContent += num;

    if (display.textContent == '0') {
        display.textContent = '';
        display.textContent += num;
        number1 = +display.textContent;
        console.log(number1);
    }
    if (['+', '-', '/', '*', '%'].includes(display.textContent)) {
        display.textContent = '';
        display.textContent += num;
        number2 = +display.textContent;
        console.log(number2);
    }

    // return display.textContent;
}

function operatorBtnClicked(operator) {
    display.textContent = operator;
    operatorEntered = display.textContent;
    // return display.textContent;
}

function equalBtnClicked() {
    let result = operate(number1, operatorEntered, number2);
    display.textContent = result;
    console.log(result);
}


function allClearBtnClicked() {
    display.textContent = 0;
    number1 = 0;
    number2 = 0;
    operatorEntered = '';
}