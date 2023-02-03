alert("This is the first release of calculator that has only summation feature");
var number1 = prompt("Enter first number");
if (number1 != null && !isNaN(parseInt(number1))) {
    var number2 = prompt("Enter second number");
    if (number2 != null && !isNaN(parseInt(number2))) {

        var result = Number(number1) + Number(number2);
        alert("The summation result= " + result);
    } else {
        alert("Enter Valid Number");

    }
} else {
    alert("Enter Valid Number");
}