console.log("welcome");
var firstName = prompt("Enter your first name");
if (firstName != null) {
    var lastName = prompt("Enter your last name");
    if (lastName != null) {
        var fullName = firstName + " " + lastName;
        var isCorrectName = confirm("Is that your name " + fullName);
        if (isCorrectName) {
            var age = prompt("Enter your Age");
            if (age != null && !isNaN(Number(age))) {
                alert("Welcome" + fullName + " you are " + age + " years old");
            }
        }
    }
}