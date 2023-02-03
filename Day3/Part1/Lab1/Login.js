console.log("working......");
var user = {
    Name: "admin",
    password: "421$$"
}

function Login() {
    var userName = prompt("Enter Username").trim();
    if (userName != null) {
        var userPassword = prompt("Enter password").trim();
        if (userPassword != null) {
            if ((userName == user.Name) && (userPassword == user.password)) {
                alert("Welcome login success");
            } else if ((userName != user.Name) && (userPassword != user.password)) {
                alert("Wrong username and Wrong password!");
            } else if (userName != user.Name) {
                alert("Wrong username!");
            } else if (userPassword != user.password) {
                alert("Wrong password!")
            }

        }
    }
}

Login();