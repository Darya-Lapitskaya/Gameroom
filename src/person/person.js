class Person {
    constructor(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get surname() {
        return this._surname;
    }

    set surname(surname) {
        this._surname = surname;
    }

    get fullName() {
        return this._name + this._surname;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
}

module.exports = Person;