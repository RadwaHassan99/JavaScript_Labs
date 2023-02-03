console.log("working.....");

function getArea(shape) {
    switch (shape) {
        case 'circle':
            var r = parseFloat(prompt("Enter radius"));
            return (Math.PI) * Math.pow(r, 2);
            break;
        case 'triangle':
            var b = parseFloat(prompt("Enter base"));
            var h = parseFloat(prompt("Enter height"));
            return 0.5 * b * h;
            break;
        case 'square':
            var a = parseFloat(prompt("Enter length of side"));
            return Math.pow(a, 2);
            break;
        case 'rectangle':
            var l = parseFloat(prompt("Enter length"));
            var w = parseFloat(prompt("Enter width"));
            return l * w;
            break;
        case 'parallelogram':
            var b = parseFloat(prompt("Enter base"));
            var h = parseFloat(prompt("Enter vertical height"));
            return b * h;
            break;
        case 'trapezium':
            var a = parseFloat(prompt("Enter the first parallel side"));
            var b = parseFloat(prompt("Enter the second parallel side"));
            var h = parseFloat(prompt("Enter height"));
            return 0.5 * (a + b) * h;
            break;
        case 'ellipse':
            var a = 0.5 * parseFloat(prompt("Enter minor axis"));
            var b = 0.5 * parseFloat(prompt("Enter major axis"));
            return (Math.PI) * a * b;
            break;
        default:
            return "Invalid shape!";
    }
}

var exit = false;
var shape;
var area;
while (exit == false) {
    shape = prompt("Enter name of the shape[circle,triangle,square,rectangle,parallelogram,trapezium,ellipse]").trim().toLowerCase();
    area = getArea(shape);
    alert("Area = " + area);
    exit = confirm("Do you want to exit?");
}