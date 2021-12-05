// TO DO

// FIGURE OUT MULTIPLE OPERATORS INPUT SO USER DOESN'T HAVE TO CLICK EQUALS EVERY TIME


const toggleSwitch = document.querySelector('.toggle');

const buttons = document.querySelectorAll('.num-button')

const resultWindow = document.querySelector('.res-text')

const deleteButton = document.querySelector('.delete')

const resetButton = document.querySelector('.reset')

const plusButton = document.querySelector('.plus')

const minusButton = document.querySelector('.minus')

const divideButton = document.querySelector('.divide')

const timesButton = document.querySelector('.times')

const equalsButton = document.querySelector('.equals')

const dotButton = document.querySelector('.dot-btn')

let firstValue = 0;

let secondValue = 0;

let operator;

let result;


// SWITCH THEME FUNC

function switchTheme() {
    if (toggleSwitch.value === '1') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else if (toggleSwitch.value === '2') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else if (toggleSwitch.value === '3') {
        document.documentElement.setAttribute('data-theme', 'purple');
    }
}

// EVENTS

toggleSwitch.addEventListener('change', switchTheme);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        resultWindow.innerHTML += button.innerHTML;
        if (resultWindow.innerHTML.length > 12) {
            resultWindow.innerHTML = resultWindow.innerHTML.slice(0, -1)
        }
    });
})

deleteButton.addEventListener('click', deleteFunc);

dotButton.addEventListener('click', dotFunc);

resetButton.addEventListener('click', resetFunc);

plusButton.addEventListener('click', plusFunc);

minusButton.addEventListener('click', minusFunc);

divideButton.addEventListener('click', divideFunc);

timesButton.addEventListener('click', timesFunc);

equalsButton.addEventListener('click', equalsFunc);

// ASIGN INPUT TO VARIABLE

function asignToFirst() {
    firstValue += parseFloat(resultWindow.innerHTML);
}

// ASIGN 2ND INPUT TO VARIABLE

function asignToSecond() {
    secondValue += parseFloat(resultWindow.innerHTML);
}

// DOT

function dotFunc() {
    if (!resultWindow.innerHTML.includes('.')) {
        resultWindow.innerHTML += dotButton.innerHTML;
    }
}

// PLUS

function plusFunc() {
    asignToFirst();
    clear();
    operator = '+';
}

// MINUS

function minusFunc() {
    asignToFirst();
    clear();
    operator = '-';
}

// DIVIDE

function divideFunc() {
    asignToFirst();
    clear();
    operator = '/';
}

// TIMES

function timesFunc() {
    asignToFirst();
    clear();
    operator = '*';
}

// EQUALS

function equalsFunc() {
    asignToSecond();
    if (operator === '+') {
        resultWindow.innerHTML = firstValue + secondValue;
    } else if (operator === '-') {
        resultWindow.innerHTML = firstValue - secondValue;
    } else if (operator === '/') {
        resultWindow.innerHTML = firstValue / secondValue;
        if (resultWindow.innerHTML.includes('.') && resultWindow.innerHTML.length > 12) {
            resultWindow.innerHTML = (firstValue / secondValue).toFixed(5)
        }
    } else if (operator === '*') {
        resultWindow.innerHTML = firstValue * secondValue;
    }
    if (resultWindow.innerHTML.length > 12) {
        resultWindow.innerHTML = 'Too long'
    }

    firstValue = 0;
    secondValue = 0;
}









// CLEAR RESULT WINDOW AFTER MATH OPERATOR CLICK

function clear() {
    resultWindow.innerHTML = '';
}

// DELETE FUNC

function deleteFunc() {
    resultWindow.innerHTML = resultWindow.innerHTML.slice(0, -1);
}


// RESET

function resetFunc() {
    resultWindow.innerHTML = '';
    resultVariable = 0;
}