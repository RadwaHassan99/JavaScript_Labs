console.log("Working.......");

class Person {
   constructor(fullName) {
        this.fullName = fullName;
        this.sleepMood = "happy";
        this.healthRate = 100;
        this.money = 100000;
    }
    Sleep(hours) {
        if (hours == 8) {
            this.sleepMood = "happy";
        } else if (hours < 8) {
            this.sleepMood = "tired";
        } else if (hours > 8) {
            this.sleepMood = "lazy";
        }
    }
    Eat(meals) {
        if (meals == 3) {
            this.healthRate = 100;
        } else if (meals == 2) {
            this.healthRate = 85;
        } else if (meals == 1) {
            this.healthRate = 65;
        }
    }

    Buy(items) {
        this.money -= items * 20;
    }
}
class Employee extends Person {
    #salary;
    #email;
    constructor(fullName, age, id, email, salary, isManager) {
        super(fullName);
        this.id = id;
        this.#email = email;
        this.workMood = "happy";
        this.#salary = salary;
        this.isManager = isManager;
        this.age = age;
    }
    work(hours) {
        if (hours == 8) {
            this.workMood = "happy";
        } else if (hours < 8) {
            this.workMood = "tired";
        } else if (hours > 8) {
            this.workMood = "lazy";
        }
    }
    set salary(value) {
        if (value >= 1000) {
            this.#salary = value;
        }
    }
    set email(value){
        this.#email=value;
    }

    get salary(){
        return this.#salary;
    }
    get email(){
        return this.#email;
    }

    Sleep(hours) {
        if (hours == 7) {
            this.sleepMood = "happy";
        } else if (hours < 7) {
            this.sleepMood = "tired";
        } else if (hours > 7) {
            this.sleepMood = "lazy";
        }
    }
    Eat(meals) {
        if (meals == 3) {
            this.healthRate = 100;
        } else if (meals == 2) {
            this.healthRate = 75;
        } else if (meals == 1) {
            this.healthRate = 50;
        }
    }

    Buy(items) {
        this.money -= items * 10;
    }
}
class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }
    getAllEmployees() {
        return this.employees;
    }
    getEmployee(empId) {
        var notFound = true;
        for (let employee of this.employees) {
            if (employee.id == empId) {
                notFound = false;
                if (employee.isManager) {
                    const obj = (({
                        fullName,
                        sleepMood,
                        age,
                        healthRate,
                        id,
                        email,
                        workMood,
                        isManager,
                    }) => ({
                        fullName,
                        sleepMood,
                        age,
                        healthRate,
                        id,
                        email,
                        workMood,
                        isManager,
                    }))(employee);
                    return obj;
                } else {
                    return employee;
                }
            }
        }
        if (notFound) {
            return "none";
        }
    }
    hire(employee) {
        this.employees.push(employee);
    }
    fire(empId) {
        let count = 0;
        for (let employee of this.employees) {
            if (employee.id == empId) {
                return delete this.employees[count];
            }
            count++;
        }
    }
}

const office1 = new Office("myOffice", []);
var exit = "c";
while (exit != "q") {
    const emp1 = new Employee("none", 0, 0, 0, "none", 0, false);
    let emp = prompt("Which operation do you want?\n1-add\n2-get\n3-delete");
    if (emp != null) {
        switch (emp) {
            case "add":
                let addEmp = prompt(
                    "Is that employee manager or normal?\n1-mngr\n2-nrml"
                );
                if (addEmp != null) {
                    emp1.fullName = prompt("Enter employee name");
                    emp1.age = prompt("Enter employee age");
                    emp1.id = prompt("Enter employee id");
                    emp1.email = prompt("Enter employee email");
                    emp1.salary = prompt("Enter employee salary");
                    switch (addEmp) {
                        case "mngr":
                            emp1.isManager = true;
                            break;
                        case "nrml":
                            emp1.isManager = false;
                            break;
                    }
                    office1.hire(emp1);
                }
                break;
            case "get":
                let choose = prompt("1-emps\n2-emp");
                if(choose != null){
                    if(choose == 'emps'){
                        for (let emps of office1.employees) {
                            if (emps.isManager) {
                                alert(
                                    "- name: " +
                                    emps.fullName +
                                    "\n- age: " +
                                    emps.age +
                                    "\n- id: " +
                                    emps.id +
                                    "\n-email: " +
                                    emps.email +
                                    "\n-manager"
                                );
                            } else {
                                alert(
                                    "- name: " +
                                    emps.fullName +
                                    "\n- age: " +
                                    emps.age +
                                    "\n- id: " +
                                    emps.id +
                                    "\n- email: " +
                                    emps.email +
                                    "\n- salary: " +
                                    emps.salary
                                );
                            }
                    }
                }
                    else if(choose == 'emp'){
                    let ID = parseInt(prompt("what is id of employee?"));
                    if (!isNaN(ID)) {
                        if (office1.getEmployee(ID) == "none") {
                            alert("This ID isn't found!");
                        } else {
                            const objEmp = Object.assign(office1.getEmployee(ID));
                            if (objEmp.isManager) {
                                alert(
                                    "- name: " +
                                    objEmp.fullName +
                                    "\n- age: " +
                                    objEmp.age +
                                    "\n- id: " +
                                    objEmp.id +
                                    "\n-email: " +
                                    objEmp.email +
                                    "\n-manager"
                                );
                            } else {
                                alert(
                                    "- name: " +
                                    objEmp.fullName +
                                    "\n- age: " +
                                    objEmp.age +
                                    "\n- id: " +
                                    objEmp.id +
                                    "\n- email: " +
                                    objEmp.email +
                                    "\n- salary: " +
                                    objEmp.salary
                                );
                            }
                        }
                    }
                }
            }
                break;
            case "delete":
                let empID = parseInt(prompt("what is id of employee?"));
                if (empID != null) {
                    let check = office1.fire(empID);
                    if (check) {
                        alert("Employee is successfully deleted");
                    } else {
                        alert("Not Found!");
                    }
                }
                break;
            default:
                alert("Incorrect Operation");
                break;
        }
    }
    exit = prompt("If you want to exit enter [q]");
}