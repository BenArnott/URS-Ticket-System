const inputForm = document.getElementById("input-form");
const inputBox = document.getElementById("input-field");

const outputBox = document.getElementById("output-field")

inputForm.addEventListener('submit details', event => {
    event.preventDefault();
    let name = inputBox.value;
    outputBox.innerHTML = "Submitted"
});