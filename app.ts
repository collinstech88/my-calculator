const number1 = document.getElementById("number1") as HTMLInputElement
const number2 = document.getElementById("number2") as HTMLInputElement
const resulttOutput = document.getElementById("result") as HTMLOutputElement

const AddBtn = document.getElementById("Add") as HTMLInputElement
const SubBtn = document.getElementById("sub") as HTMLInputElement
const MultBtn = document.getElementById("Mult") as HTMLInputElement
const DivBtn = document.getElementById("Divide") as HTMLInputElement

const printResult = document.getElementById("result") as HTMLOutputElement

function AddNumbers(){
    let a = parseFloat(number1.value) || 0; 
    let b = parseFloat(number2.value) || 0;
    let result = a+b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers)

function SubtractNumbers(){
    let a = parseFloat(number1.value) || 0; 
    let b = parseFloat(number2.value) || 0;
    let result = a-b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubtractNumbers)


MultBtn.addEventListener("click",  ()=>{
    let rt =parseFloat(number1.value) * parseFloat(number2.value);
    printResult.textContent = rt.toString();
})

function DivideNumbers(){
    let a = parseFloat(number1.value) || 0; 
    let b = parseFloat(number2.value) || 0;
    let result = a/b;
    printResult.textContent = result.toString();
} 
DivBtn.addEventListener("click", DivideNumbers)