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

function operate(operator, num1, num2){
    if (operator === '+') return add(num1, num2)
    else if (operator === '-') return subtract(num1, num2)
    else if (operator === '/') return divide(num1, num2)
    else if (operator === '*') return multiply(num1, num2)
    else if (operator === '%') return modulo(num1, num2)
}


function numBtnClicked(num) {
    let exclude = ['0', '+', '-', '/', '*', '%'];
    if (exclude.includes(display.textContent)) {
        display.textContent = '';
    }
    display.textContent += num;
    return display.textContent;
    // console.log(`${num} is clicked`)
}

function operatorBtnClicked(operator) {
    display.textContent = operator;
}