// js file
let currentExpression = '';

function appendCharacter(char) {
  currentExpression += char;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (error) {
    currentExpression = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  currentExpression = '';
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = currentExpression;
}
