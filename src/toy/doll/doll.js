const Toy = require('E:/JsCourse/Gameroom/src/toy/toy');

class Doll extends Toy {
    constructor(price, size, ageCategory, material, color, manufacturer, type, isInteractive = false) {
        super(price, size, ageCategory, material, color, manufacturer);
        this.type = type;
        this.isInteractive = isInteractive;
    }
    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    get isInteractive() {
        return this._isInteractive;
    }

    set isInteractive(isInteractive) {
        this._isInteractive = isInteractive;
    }

}

module.exports = Doll;