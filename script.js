let number1 = '';
let operatorEntered = '';
let number2 = '';
let numberFlag = true;
let operatorFlag = true;
let secNumFlag = true;

const display = document.querySelector('.display');
const operatorsBtn = document.querySelectorAll('.operatorsBtn');
const numsBtn = document.querySelectorAll('.numsBtn');

// digits change color upon click
numsBtn.forEach(numBtn => {
    numBtn.addEventListener('mousedown', function () {
        numBtn.style.backgroundColor = 'rgb(245, 192, 95)';
    })
    numBtn.addEventListener('mouseup', function () {
        numBtn.style.backgroundColor = 'rgb(223, 151, 18)';
    })
});

// operator changes color upon click
operatorsBtn.forEach(operatorC => {
    operatorC.addEventListener('click', function () {
        operatorC.style.backgroundColor = 'rgb(92, 112, 241)';
    });
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

function operate(num1, operator, num2) {
    if (operator === '+') return add(num1, num2)
    else if (operator === '-') return subtract(num1, num2)
    else if (operator === '/') return divide(num1, num2)
    else if (operator === '*') return multiply(num1, num2)
    else if (operator === '%') return modulo(num1, num2)
}

function numBtnClicked(num) {
    operatorsBtn.forEach(operatorC => {
        operatorC.style.backgroundColor = 'skyblue';
    });

    if (display.textContent == '0') {
        display.textContent = '';
    }

    if (operatorFlag) {
        if (['+', '-', '/', '*', '%'].includes(display.textContent)) {
            display.textContent = '';
            numberFlag = false;
        }
    }
    else {
        if (secNumFlag) {
            display.textContent += num;
            number2 = display.textContent;
            console.log('number 2: ', number2);
        }
        else {
            display.textContent = '';
            display.textContent += num;
            number2 = display.textContent;
            console.log('number 2: ', number2);
            secNumFlag = true;
        }
    }

    if (numberFlag) {
        display.textContent += num;
        number1 = +display.textContent;
        console.log('number 1: ', number1);
    }
    else {
        if (operatorFlag) {
            display.textContent += num;
            number2 = display.textContent;
            console.log('number 2: ', number2);
            operatorFlag = false;
        }
    }
}

function multipleOperatorsBtnClicked() {
    display.textContent = equalBtnClicked();
    number1 = +display.textContent;
    console.log('multipleOperatorsBtnClicked: ', number1);
}

function operatorBtnClicked(operator) {
    if (operatorFlag) {
        display.textContent = operator;
        operatorEntered = display.textContent;
        console.log('operatorEntered: ', operatorEntered);
    }
    else {
        if (secNumFlag) {
            multipleOperatorsBtnClicked();
            operatorEntered = operator;
            console.log('operatorEntered: ', operatorEntered);
            secNumFlag = false;
        }
    }
}

function equalBtnClicked() {
    if (display.textContent == 0) {
        return display.textContent = "Error";
    }
    let result = operate(+number1, operatorEntered, +number2);
    console.log('result: ', result);
    if (result == undefined) {
        return display.textContent = "Error";
    }
    display.textContent = result;
    return result;
}

function allClearBtnClicked() {
    display.textContent = 0;
    number1 = '';
    operatorEntered = '';
    number2 = '';
    numberFlag = true;
    operatorFlag = true;
}