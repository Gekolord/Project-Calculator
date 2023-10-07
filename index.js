let firstNumber = ""
let operator = ""
let secondNumber = ""
let displayedNumber = ""



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

function modulo(n1, n2) {
  return n1 % n2
}


// takes operator and 2 numbers and calls respective functions
function operate(oper, n1, n2) {
    let returnValue = 0;
    switch (oper) {
        case "+":
            returnValue = +add(n1,n2).toFixed(5);
            break;
        case "-":
            returnValue = +subtract(n1,n2).toFixed(5);
            break;
        case "*":
            returnValue = +multiply(n1,n2).toFixed(5);
            break;
        case "/":
            if (n2 == 0) {return 0;}
            returnValue = +divide(n1,n2).toFixed(5);
            break;
        case "%":
            returnValue = +modulo(n1, n2).toFixed(5);
            break;
    }
    return returnValue;
}
// populates input field with numbers
function display(n) {
  if (firstNumber.length < 15) {
  firstNumber += n
  firstNumber = firstNumber.toString();
  if (firstNumber.charAt(0) == '0' && firstNumber.charAt(1) != '.') {
    firstNumber = +firstNumber;
    firstNumber = firstNumber.toString();
  }
  const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator} ${firstNumber}`
  const result = document.getElementById('result').innerHTML = `${operate(operator, +secondNumber, +firstNumber)}`
  }
}
// Takes operator and 2 numbers. Calculates and populates display.
// If user presses multiple times on 
// the operator without typing numbers, it wont work.
function onOperatorClick(op) {
  
  if (operator == "" && displayedNumber == 0) {
    if (firstNumber != '') {    
        secondNumber += +firstNumber
      }
    firstNumber = ""
    operator = op

  } else if (operator != "" &&  firstNumber != ""){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    
    displayedNumber = operate(operator, secondNumber, firstNumber);

    const result = document.getElementById('result').innerHTML = displayedNumber;
    
    firstNumber = ""
    secondNumber = displayedNumber
    operator = op
    displayedNumber = 0
  }
  const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator}`
}


function dot() {
  if (firstNumber.length > 0) {
    if (firstNumber.includes('.') == false) {
      firstNumber += '.'
      const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator} ${firstNumber}`
      const result = document.getElementById('result').innerHTML = `${operate(operator, +secondNumber, +firstNumber)}`
    }
  }
}


function clearNum() {
  
  if (firstNumber != '') {
    if (firstNumber.length == 1 && secondNumber != '') {
      firstNumber = firstNumber.slice(0, -1);
      const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator}`
      const result = document.getElementById('result').innerHTML = `${0}`
    } else if (firstNumber.includes('e') == true){
      firstNumber = ''
      const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator} ${firstNumber}`
      const result = document.getElementById('result').innerHTML = `${operate(operator, +secondNumber, +firstNumber)}`
    } else {
      firstNumber = firstNumber.slice(0, -1);
      const input = document.getElementById('input').innerHTML = `${secondNumber} ${operator} ${firstNumber}`
      const result = document.getElementById('result').innerHTML = `${operate(operator, +secondNumber, +firstNumber)}`
    }
  } else if (firstNumber == '' && operator != '') {
      operator = ''
      firstNumber = secondNumber
      secondNumber = ''
      firstNumber = firstNumber.toString();
      const input = document.getElementById('input').innerHTML = `${firstNumber}`
      const result = document.getElementById('result').innerHTML = `${0}`
  } else if (firstNumber == '' && operator == '' && secondNumber != '') {

      firstNumber = firstNumber.slice(0, -1);
      const input = document.getElementById('input').innerHTML = `${firstNumber}`
      const result = document.getElementById('result').innerHTML = `${operate(operator, +secondNumber, +firstNumber)}`
  }

}

function calculationResult() {
  if (firstNumber != '' && secondNumber != '' && operator != '') {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    
    displayedNumber = operate(operator, secondNumber, firstNumber);

    
    

    firstNumber = displayedNumber.toString();
    secondNumber = ''
    operator = ''
    displayedNumber = 0
    const input = document.getElementById('input').innerHTML = `${firstNumber}`
    const result = document.getElementById('result').innerHTML = '&nbsp;';
  }
}

function clearAllData() {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  displayedNumber = 0
  const input = document.getElementById('input').innerHTML = `${0}`
  const result = document.getElementById('result').innerHTML = '&nbsp;';
}