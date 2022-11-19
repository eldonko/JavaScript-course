const defaultResult = 0;
let currentResult = defaultResult;

function add(a, b) {
    return a + b;
}

addBtn.addEventListener('click', add);

outputResult(currentResult, calculationDescription);
