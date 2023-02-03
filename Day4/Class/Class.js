console.log("Working.......");

class Person {
    constructor(fullName, money) {
        this.fullName = fullName;
        this.sleepMood = "happy";
        this.healthRate = 100;
        this.money = money;
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
const Radwa = new Person("Radwa Hassan", 2000);
Radwa.Buy(5);
Radwa.Eat(1);
Radwa.Sleep(10);
console.log("Full Name:" + Radwa.fullName);
console.log("Sleep Mood:" + Radwa.sleepMood);
console.log("Mony:" + Radwa.money);
console.log("Health Rate:" + Radwa.healthRate);