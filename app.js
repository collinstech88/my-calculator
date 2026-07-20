"use strict";
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const resulttOutput = document.getElementById("result");
const AddBtn = document.getElementById("Add");
const SubBtn = document.getElementById("sub");
const MultBtn = document.getElementById("Mult");
const DivBtn = document.getElementById("Divide");
const printResult = document.getElementById("result");
function AddNumbers() {
    let a = parseFloat(number1.value) || 0;
    let b = parseFloat(number2.value) || 0;
    let result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
function SubtractNumbers() {
    let a = parseFloat(number1.value) || 0;
    let b = parseFloat(number2.value) || 0;
    let result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubtractNumbers);
// function MultiplyNumbers(){
//     let a = parseFloat(number1.value) || 0; 
//     let b = parseFloat(number2.value) || 0;
//     let result = a*b;
//     printResult.textContent = result.toString();
// }
MultBtn.addEventListener("click", () => {
    let rt = parseFloat(number1.value) * parseFloat(number2.value);
    printResult.textContent = rt.toString();
});
function DivideNumbers() {
    let a = parseFloat(number1.value) || 0;
    let b = parseFloat(number2.value) || 0;
    let result = a / b;
    printResult.textContent = result.toString();
}
DivBtn.addEventListener("click", DivideNumbers);
