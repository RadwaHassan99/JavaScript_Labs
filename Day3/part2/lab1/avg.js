console.log("working........");

function fillArray(count) {
    var numbers = [];
    var j;
    for (let i = 0; i < count; i++) {
        j = i + 1;
        numbers[i] = Number(prompt('Enter number' + j));
    }
    return numbers;
}

function getSumAndAvg(number) {
    var sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return [sum, sum / number.length];
}

var count = Number(prompt("How many numbers you want ?"));
if (count != NaN || count < 0) {
    var result = getSumAndAvg(fillArray(count));
    alert("Sum= " + result[0] + " average= " + result[1]);
} else {
    alert("Invalid Input!");
}