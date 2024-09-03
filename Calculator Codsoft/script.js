let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    // Prevent multiple operators in a row or at the start
    if (currentInput !== '' && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
        currentInput += operator;
        display.textContent = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    // Handle unique case
    if (currentInput === '1') {
        display.textContent = 'Aashir Zayd';
    } else {
        try {
            display.textContent = eval(currentInput) || '0';
        } catch (e) {
            display.textContent = 'Error';
        }
    }
    currentInput = '';
}
