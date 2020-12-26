const EventEmitter = require('events');

class Cook extends EventEmitter{
    
    constructor(name, ID, foodSpecialty, salary, breaks) {
        super();
        this.name = name;
        this.ID = ID;
        this.foodSpecialty = foodSpecialty;
        this.salary = salary;
        this.breaks = breaks;
    }
    toString() {
        console.log("Name: " + this.name + "  ID: " + this.ID + "  Food Specialty: " + this.foodSpecialty + "  Salary: " + this.salary + "  Breaks: " + this.breaks);
    }
    makeFood(food) {
        if (food === this.foodSpecialty) {
            this.emit('Cooked Correctly');
        } else {
            this.emit('I did my best');
        }
    }

    salaryCut(salaryDecrease) {
        if (salaryDecrease > (.1 * this.salary)) {
            this.emit('Going on strike');
        } else {
            this.salary = this.salary - salaryDecrease;
            this.emit('fine');
        }
    }

    goOnBreak(milliseconds) {
        let self = this;
        setTimeout(function() {
            if(self.breaks > 0) {
                console.log("Break done");
                self.breaks = self.breaks-1; 
            } else {
                console.log("No More Breaks Allowed! ");
            }
        }, milliseconds);     
    }

    
}

module.exports = Cook;