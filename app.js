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

const operators = {
    PLUS: 'plus',
    MINUS: 'minus',
    DIVIDE: 'divide',
    MULTIPLY: 'multiply'
};

const defaultValue = null;

let userInputValue = defaultValue;

let selectedOperator = '';

let result = defaultValue;

let readyToCalc = false;



// EVENTS

toggleSwitch.addEventListener('change', switchTheme);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        resultWindow.innerHTML += button.innerHTML;
        if (resultWindow.innerHTML.length > 12) {
            resultWindow.innerHTML = resultWindow.innerHTML.slice(0, -1)
        }
        userInputValue = parseFloat(resultWindow.innerHTML);
        readyToCalc = !!(selectedOperator && userInputValue !== defaultValue);
    });
})

deleteButton.addEventListener('click', deleteFunc);

dotButton.addEventListener('click', dotFunc);

resetButton.addEventListener('click', resetFunc);

plusButton.addEventListener('click', () => operatorFunc(operators.PLUS));

minusButton.addEventListener('click', () => operatorFunc(operators.MINUS));

divideButton.addEventListener('click', () => operatorFunc(operators.DIVIDE));

timesButton.addEventListener('click', () => operatorFunc(operators.MULTIPLY));

equalsButton.addEventListener('click', equalsFunc);

function calculate() {
    if (selectedOperator === operators.PLUS) {
        result += userInputValue;
    } else if (selectedOperator === operators.MINUS) {
        result -= userInputValue;
    } else if (selectedOperator === operators.MULTIPLY) {
        result *= userInputValue;
    } else if (selectedOperator === operators.DIVIDE) {
        result /= userInputValue;
        if (result.toString().includes('.') && result.toString().length > 9) {
            result = result.toFixed(5)
        }
    }
    readyToCalc = false;

}

function operatorFunc(operator) {
    if (readyToCalc) {
        calculate();
    } else if (result === defaultValue && userInputValue !== defaultValue) {
        result = userInputValue;
    }
    selectedOperator = operator;
    clear();
}

function equalsFunc() {
    calculate();
    resultWindow.innerHTML = result;
    if (resultWindow.innerHTML.length > 12) {
        resultWindow.innerHTML = 'Too long'
    }
}

// DOT

function dotFunc() {
    if (!resultWindow.innerHTML.includes('.')) {
        resultWindow.innerHTML += dotButton.innerHTML;
    }
}

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
    userInputValue = 0;
    result = defaultValue;
    selectedOperator = '';
}