



const add = function(n1, n2) {
    let sum = 0
    sum = n1 + n2
    return sum;
  };
  
  const subtract = function() {
    let sub = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
      sub -= arguments[i];
    }
    return sub;
  };
  
  
  const multiply = function(n1, n2) {
    let mul = 1
    mul = n1 * n2
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
function operate(oper, n1, n2) {
    let returnValue = 0;
    switch (oper) {
        case "+":
            returnValue = add(n1,n2);
            break;
        case "-":
            returnValue = subtract(n1,n2);
            break;
        case "*":
            returnValue = multiply(n1,n2);
            break;
        case "/":
            returnValue = divide(n1,n2);
            break;
    }
    return returnValue;
}
// populates input field with numbers
function display(n) {
  firstNumber += n
  const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator} ${+firstNumber}`
  
}
// Takes operator and 2 numbers. Calculates and populates display.
// If user presses multiple times on 
// the operator without typing numbers, it wont work.
function onOperatorClick(op) {
  
  if (operator == "" && displayedNumber == 0) {
    secondNumber += +firstNumber
    firstNumber = ""
    operator = op

  } else if (operator != "" &&  firstNumber != ""){
    // secondNumber = operate(op, +secondNumber, +firstNumber)
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    
    displayedNumber = operate(operator, secondNumber, firstNumber);

    const result = document.getElementById('result').innerHTML = displayedNumber;
    
    firstNumber = ""
    secondNumber = displayedNumber
    operator = op
    
  }
  const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator}`
}