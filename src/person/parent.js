const Person = require('./person');

class Parent extends Person {
    constructor(name, surname, dateOfBirth) {
        super(name, surname, dateOfBirth);
        
    }

}

module.exports = Parent;

