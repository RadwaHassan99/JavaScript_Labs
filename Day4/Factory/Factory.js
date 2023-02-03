console.log("Working.......");

function Person(fullName, money, sleepMood, healthRate) {
    return {
        fullName,
        sleepMood,
        healthRate,
        money,
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
}


const Radwa = Person("Radwa Hassan", 4000, "happy", 100);
console.log(Radwa.money);
Radwa.Buy(100);
Radwa.Eat(1);
Radwa.Sleep(5);
console.log("Full Name:" + Radwa.fullName);
console.log("Sleep Mood:" + Radwa.sleepMood);
console.log("Mony:" + Radwa.money);
console.log("Health Rate:" + Radwa.healthRate);