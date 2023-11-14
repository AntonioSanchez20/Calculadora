let output = document.getElementById('output');

function appendToOutput(value) {
    output.innerText += value;
}

function clearOutput() {
    output.innerText = '0';
}

function deleteLastCharacter() {
    output.innerText = output.innerText.slice(0, -1);
    if (output.innerText === '') {
        output.innerText = '0';
    }
}

function calculate() {
    try {
        output.innerText = eval(output.innerText);
    } catch (error) {
        output.innerText = 'Error';
    }
}