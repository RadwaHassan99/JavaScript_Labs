console.log("Working...........");


function validateStatus(age) {
    if (age != null && !isNaN(age) && age > 0) {
        if (age >= 1 && age <= 10) {
            return "Child";
        } else if (age >= 11 && age <= 18) {
            return "Teenager";
        } else if (age >= 19 && age <= 50) {
            return "Grown up";
        } else if (age > 50) {
            return "Old";
        }
    } else {
        return "InValid";
    }
}


var cancel = false;
var age;
while (cancel == false) {
    age = Number(prompt("Enter your age"));
    alert(validateStatus(age));
    cancel = confirm("Do you Want to Exit");
}