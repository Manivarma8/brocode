const input = document.getElementById('input');

function activate(value) {
    input.value += value;
}

function Clear() {
    input.value = '';
}

function Calc() {
    try {
        input.value = eval(input.value).toFixed(2);
    } catch {
        input.value = 'Error';
    }
}