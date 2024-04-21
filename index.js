const inputEle = document.getElementById('input');
const result = document.getElementById('result');
const error = document.getElementById('error');

let errorTime;
let resultTime;
function updateResults() {
    if (inputEle.value <= 0 || isNaN(inputEle.value)) {
        error.innerText = `Please Enter a valid number`;
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            error.innerText = "";
            inputEle.value = "";
        }, 2000)
    } else {
        result.innerText = (+inputEle.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            result.innerText = "";
            inputEle.value = "";
        }, 10000);
    }
}
inputEle.addEventListener('input', updateResults)