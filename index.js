
const result = document.getElementById('result')


const add = function(n) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  };
  
  const subtract = function() {
    let sub = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
      sub -= arguments[i];
    }
    return sub;
  };
  
  
  const multiply = function() {
    let mul = 1
    for (let i = 0; i < arguments.length; i++) {
      mul *= arguments[i];
    }
    return mul;
  };
  

function divide(numbers) {
    let dividor = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        dividor /= arguments[i]
    }
    return dividor
}

let firstNumber = ""
let operator = ""
let secondNumber = ""
let displayedNumber = ""
// takes operator and 2 numbers and calls respective functions
function operate(op, n1, n2) {
    switch (op) {
        case "+":
            add(n1,n2);
            break;
        case "-":
            subtract(n1,n2);
            break;
        case "*":
            multiply(n1,n2);
            break;
        case "/":
            divide(n1,n2);
            break;
    }
}
// populates input field with numbers
function display(n) {
  firstNumber += n
  const input = document.getElementById('input').innerHTML = +firstNumber
}
// Takes operator and 2 numbers. Calculates and populates display.
// If user presses multiple times on 
// the operator without typing numbers, it wont work.
function onOperatorClick(op, n1, n2) {
  if (operator == "") {
    secondNumber += firstNumber
    firstNumber = ""
    operator += op
  } else if (operator != "" && firstNumber != ""){
    displayedNumber = operate(op, n1, n2)
    firstNumber = ""
    secondNumber = ""
    operator = ""
  }

}