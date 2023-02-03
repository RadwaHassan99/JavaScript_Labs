console.log("working..........");


function clkConverter(hour) {
    var amOrpm = hour <= 12 ? 'AM' : 'PM';
    return (((hour % 12) || 12) + amOrpm);
}

var hours;
let cancel = false;
while (cancel == false) {
    hours = Number(prompt("Enter the hour"));
    alert("Time: " + clkConverter(hours));
    cancel = confirm("Do you want to Exit");
}