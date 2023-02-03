console.log("working....");

function calculator(firstNumber, secondNumber, operator) {
    switch (operator) {
        case 'sum':
            return firstNumber + secondNumber;
            break;
        case 'sub':
            return firstNumber - secondNumber;
            break;
        case 'mul':
            return firstNumber * secondNumber;
            break;
        case 'div':
            return firstNumber / secondNumber;
            break;
        case 'mod':
            return firstNumber % secondNumber;
            break;
        default:
            return "Invalid operation";
    }
}

var firstNumber;
var operator;
var secondNumber;
var cancel = false;
var end = false;

while (end == false) {
    firstNumber = parseFloat(prompt("Enter first number"));
    operator = prompt("Enter operation", "sum,sub,mul,div,mod").trim();
    secondNumber = parseFloat(prompt("Enter second number"));
    if (firstNumber != NaN && secondNumber != NaN && operator != null) {
        var result = calculator(firstNumber, secondNumber, operator);
        alert("Result= " + result);
    } else {
        alert("Invalid");
    }
    cancel = confirm("Do you want another operation?");
    while (cancel == true) {
        operator = prompt("Enter operation", "sum,sub,mul,div,mod").trim();
        secondNumber = parseFloat(prompt("Enter second number"));
        firstNumber = result;
        if (firstNumber != NaN && secondNumber != NaN && operator != null) {
            var result = calculator(firstNumber, secondNumber, operator);
            alert("Result= " + result);
        } else {
            alert("Invalid");
        }
        cancel = confirm("Do you want to end this operation?");
    }
    end = confirm("Do you want to Exit?");
}