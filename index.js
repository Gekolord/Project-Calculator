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

let firstNumber = 0
let operator = ""
let secondNumber = 0
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