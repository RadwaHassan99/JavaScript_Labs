console.log("working...........");
var conctacts = [{
    name: "none",
    phone: "none"
}];

var exit = false;
var index = 0;
while (exit == false) {
    var operation = prompt("Choose your operation, (add) or (search)?").trim();
    switch (operation) {
        case 'add':
            conctacts[index] = {
                name: prompt("Enter name").trim(),
                phone: prompt("Enter phone").trim()
            }
            alert("contatc is added");
            index++;
            break;
        case 'search':
            var data = prompt("Enter name or phone to search with");
            var contact = conctacts.find(function(item) {
                return item.name == data || item.phone == data;
            })
            if (contact != undefined) {
                alert("Contact[ name: " + contact.name + "- phone: " + contact.phone + "]");
            } else {
                alert("Contact not found!");
            }
            break;
        default:
            alert("Invalid operation!");
    }
    exit = confirm("Do you want to exit");
}