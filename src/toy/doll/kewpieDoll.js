const Doll = require('./doll');

class KewpieDoll extends Doll {
    constructor(price, size, ageCategory, material, color, manufacturer, type, isInteractive = true) {
        super(price, size, ageCategory, material, color, manufacturer, type, isInteractive);
        this.category = 'Not set';
    }

    set category(category) {
        this._category = category;
    }

    get category() {
        return this._category;
    }

}

module.exports = KewpieDoll;

