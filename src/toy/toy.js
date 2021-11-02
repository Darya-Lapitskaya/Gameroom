class Toy {
    constructor(price, size, ageCategory, material, color, manufacturer) {
        this.price = price;
        this.size = size;
        this.ageCategory = ageCategory;
        this.material = material;
        this.color = color;
        this.manufacturer = manufacturer;
    }
    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;
    }

    get ageCategory() {
        return this._ageCategory;
    }

    set ageCategory(ageCategory) {
        this._ageCategory = ageCategory;
    }

    get material() {
        return this._material;
    }

    set material(material) {
        this._material = material;
    }
    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    set manufacturer(manufacturer) {
        this._manufacturer = manufacturer;
    }
    

}

module.exports = Toy;