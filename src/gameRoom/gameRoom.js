class GameRoom {
    constructor(location, budget = 0, pricePerKid = 0) {
        this.location = location;
        this.budget = budget;
        this.pricePerKid = pricePerKid;
        this.toysPool = [];
        this.kidsPool = [];
    }

    get budget() {
        return this._budget;
    }

    get location() {
        return this._location;
    }

    set location(location) {
        this._location = location;
    }

    set budget(budget) {
        this._budget = budget;
    }

    get pricePerKid() {
        return this._pricePerKid;
    }

    set pricePerKid(pricePerKid) {
        this._pricePerKid = pricePerKid;
    }

    addBudget(budget) {
        this.budget = this.budget + budget;
    }

    addKidsPool(kids) {
        this.kidsPool = [...this.kidsPool, ...kids];
    }

    addToysPool(toys) {

        let priceOfToys = 0;
        let newArr = [];
        for (let i = 0; i < toys.length; i++) {
            priceOfToys = priceOfToys + toys[i].price;
            if (priceOfToys <= this.budget) {
                newArr.push(toys[i]);
                this.budget = this.budget - toys[i].price;
            }
        }
        this.toysPool = [...this.toysPool, ...newArr];
        console.log(`Successfully added toys: ${newArr.length}`);
        console.log(`Number of toys not added because of price limitation: ${toys.length - newArr.length}`);
    }

    addToy(toy) {
        if (toy.price <= this.budget) {
            this.toysPool.push(toy);
            this.budget = this.budget - toy.price;
        } else {
            console.log('Budget is not enough');
        }
    }

    toysFilterByPrice(price) {
        return this.toysPool.find((toy) => toy.budget >= price);
    }


    getToysPool() {
        return this.toysPool;
    }

    getKidsPool() {
        return this.kidsPool;
    }

    filterToys(cr) {
        { 
            return this.toysPool = this.toysPool.filter(function (item) {
                for (let key in cr) {
                    if (item[key] === undefined || item[key] != cr[key])
                        return false;
                }
                return true;
            })
        }
    }

    sortToysbyPrice(order) {
        switch (order) {
            case 'asc':
               console.table( this.toysPool.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)));
                break;
            case 'desc':
                console.table( this.toysPool.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)));
                break;
            default:
                console.log('No correct option is entered');
        }

    }


    addKid(kid) {
        this.kidsPool.push(kid);
    }

    getKidParentsInfo(kid){
        this.kidsPool[kid]. getParentsInfo();
    }
}

module.exports = GameRoom;
