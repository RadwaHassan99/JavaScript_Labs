console.log("Working.......");

const Person = {
    init(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        this.money = money;
        return this;
    },


    Sleep(hours) {
        if (hours == 7) {
            this.sleepMood = "happy";
        } else if (hours < 7) {
            this.sleepMood = "tired";
        } else if (hours > 7) {
            this.sleepMood = "lazy";
        }
    },

    Eat(meals) {
        if (meals == 3) {
            this.healthRate = 100;
        } else if (meals == 2) {
            this.healthRate = 75;
        } else if (meals == 1) {
            this.healthRate = 50;
        }
    },

    Buy(items) {
        this.money -= items * 10;
    }
}

const Radwa = Object.create(Person)
Radwa.init("Radwa Hassan", 5000, "happy", 100);
Radwa.Buy(10);
Radwa.Eat(2);
Radwa.Sleep(4);
console.log("Full Name:" + Radwa.fullName);
console.log("Sleep Mood:" + Radwa.sleepMood);
console.log("Mony:" + Radwa.money);
console.log("Health Rate:" + Radwa.healthRate);