function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (['+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
        appendToDisplay(key);
    }
});