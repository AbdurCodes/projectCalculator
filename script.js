let number1 = '';
// number1 = +number1;
let operatorEntered = '';
let number2 = '';
// number2 = +number2;
let numberFlag = true;
let operatorFlag = true;
let secNumFlag = true;
let zeroFlag = true;
let result = '';
let signFlag = true;

// if (number1.length > 1 || number2.length > 1) {
//     if (number1[0] == '0' || number2[0] == '0') {
//         number1.slice(1);
//         // number2.slice(1);
//     }
// }

let decimalBtn = document.querySelector('.decimalBtn');
let display = document.querySelector('.display');
let operatorsBtn = document.querySelectorAll('.operatorsBtn');
operatorsBtn = Array.from(operatorsBtn);
let numsBtn = document.querySelectorAll('.numsBtn');
let equalTo = document.querySelector('.equalTo');
let backspaceBtn = document.querySelector('.backspaceBtn');

// digits change color upon click
numsBtn.forEach(numBtn => {
    numBtn.addEventListener('mousedown', function () {
        numBtn.style.backgroundColor = 'rgb(245, 192, 95)';
    })
    numBtn.addEventListener('mouseup', function () {
        numBtn.style.backgroundColor = 'rgb(223, 151, 18)';
    })
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


function limitDisplayDigits(number) {
    if (String(number).length > 8) {
        console.log("Display length exceeded: ", String(number).length);
        display.textContent = 'Error';
        return;
    }
}


function numBtnClicked(num) {

    backspaceBtn.removeAttribute('disabled');
    

    if (num === '.') {
        decimalBtn.setAttribute('disabled', '');
    }

    operatorsBtn.forEach(operatorC => {
        operatorC.style.backgroundColor = 'skyblue';
    });

    if (display.textContent == 'Error') {
        console.log("Plz AC the display.");
        return;
    }

    if (zeroFlag) {
        if (display.textContent == '0') {
            display.textContent = '';
            zeroFlag = false;
        }
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
            if (num == '.') {
                number2 = display.textContent;
            }
            else {
                number2 = +display.textContent;
                display.textContent = number2;
            }
            console.log('number 2: ', number2);
            limitDisplayDigits(number2);

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
        if (num == '.') {
            number1 = display.textContent;
        }
        else {
            number1 = +display.textContent;
            display.textContent = number1;
        }
        console.log('number 1: ', number1);
        limitDisplayDigits(number1);
    }
    else {
        if (operatorFlag) {
            display.textContent += num;
            if (num == '.') {
                number2 = display.textContent;
            }
            else {
                number2 = +display.textContent;
                display.textContent = number2;
            }
            console.log('number 2: ', number2);
            operatorFlag = false;
        }
    }
}


function signBtnClicked() {
    if (numberFlag) {
        number1 = -(number1);
        display.textContent = number1;
        console.log('signBtnClicked');
    }
    else {

        if (signFlag) {
            number2 = -(number2);
            display.textContent = number2;
            console.log('signBtnClicked');

        }
        else {
            result = -(result);
            number1 = result;
            display.textContent = result;
            console.log('signBtnClicked');
        }
    }
}


function multipleOperatorsBtnClicked() {
    display.textContent = equalBtnClicked();
    number1 = +display.textContent;
    console.log('multipleOperatorsBtnClicked: ', number1);
    signFlag = false;
}


function operatorBtnClicked(operator, index) {
    decimalBtn.removeAttribute("disabled");

    if (operatorFlag) {
        display.textContent = operator;
        operatorEntered = display.textContent;
        operatorsBtn.forEach(operatorC => {
            operatorC.style.backgroundColor = 'skyblue';
        });
        operatorsBtn[index].style.backgroundColor = 'rgb(92, 112, 241)';
        console.log('operatorEntered: ', operatorEntered);
    }
    else {
        if (secNumFlag) {
            equalTo.setAttribute('disabled', '');
            // backspaceBtn.setAttribute('disabled', '');
            multipleOperatorsBtnClicked();
            operatorEntered = operator;
            operatorsBtn[index].style.backgroundColor = 'rgb(92, 112, 241)';
            decimalBtn.removeAttribute('disabled');
            console.log('operatorEntered: ', operatorEntered);
            secNumFlag = false;
        }
    }
}


function equalBtnClicked() {
    backspaceBtn.setAttribute('disabled', '');
    if (number2 == '') {
        return display.textContent = "Error";
    }
    result = operate(+number1, operatorEntered, +number2);

    if (String(result).includes('.')) {
        result = +result.toFixed(6);
    }

    if (String(result).length > 8) {
        console.log("Result length exceeds max limit: ", String(result).length);
        display.textContent = 'Error';
        return;
    }

    display.textContent = result;
    console.log('result: ', result);
    if (secNumFlag) {

        decimalBtn.setAttribute('disabled', '');
    }
    return result;
}


function allClearBtnClicked() {
    display.textContent = 0;
    number1 = '';
    operatorEntered = '';
    number2 = '';
    numberFlag = true;
    operatorFlag = true;
    secNumFlag = true;
    zeroFlag = true;
    signFlag = true;
    decimalBtn.removeAttribute("disabled");
    equalTo.removeAttribute("disabled");
    backspaceBtn.removeAttribute('disabled');
    operatorsBtn.forEach(operatorC => {
        operatorC.style.backgroundColor = 'skyblue';
    });
}


function backspaceBtnClicked() {
    // if (!display.textContent.includes('.')) {
    //     decimalBtn.removeAttribute("disabled");
    // }
    if (display.textContent.length > 0) {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        display.textContent = +display.textContent;
        if (numberFlag) {
            number1 = display.textContent;
            if (!number1.includes('.')) {
                decimalBtn.removeAttribute("disabled");
            }
            // display.textContent = number1;
            console.log('number 1: ', number1);
        }
        else {
            number2 = display.textContent;
            if (!number2.includes('.')) {
                decimalBtn.removeAttribute("disabled");
            }
            // display.textContent = number2;
            console.log('number 2: ', number2);
        }
    }
    else {
        display.textContent = '0';
        // allClearBtnClicked();
    }
}