const GameRoom = require('./gameRoom');
const Toy = require('E:/JsCourse/Gameroom/src/toy/toy');
const data = require('E:/JsCourse/Gameroom/data/data.json');
const Doll = require('E:/JsCourse/Gameroom/src/toy/doll/doll');
const Car = require('E:/JsCourse/Gameroom/src/toy/car');

class GameRoomBuilder {
    constructor(budget) {
        this.gameRoom = new GameRoom();
        this.gameRoom.budget = budget;
    }

    addToysPool(toys) {

        let priceOfToys = 0;
        let newArr = [];
        for (let i = 0; i < toys.length; i++) {
            priceOfToys = priceOfToys + toys[i].price;
            if (priceOfToys <= this.gameRoom.budget) {
                newArr.push(toys[i]);
                this.gameRoom.budget = this.gameRoom.budget - toys[i].price;
            }
        }

        this.gameRoom.toysPool = [...this.gameRoom.toysPool, ...newArr];
        console.log(`Successfully added toys: ${newArr.length}`);
        console.log(`Number of toys not added because of price limitation: ${toys.length - newArr.length}`);
        return this;

    }


    addToysPoolJson() {
        let listOfTypes = Object.entries(data);
        let priceOfToys = 0;
        for (let i = 0; i < listOfTypes.length; i++) {
            if (listOfTypes[i][0] == 'Toy') {
                for (let k = 0; k < listOfTypes[i][1].length; k++) {
                    let newArr = Object.entries(listOfTypes[i][1][k]);
                    let D = new Toy(newArr[0][1], newArr[1][1], newArr[2][1], newArr[3][1], newArr[4][1], newArr[5][1]);
                    priceOfToys = priceOfToys + parseInt(D.price);
                    if (priceOfToys <= this.gameRoom.budget) {
                        this.gameRoom.toysPool.push(D);
                        this.gameRoom.budget = this.gameRoom.budget - D.price;
                    }
                }

            }
            else if (listOfTypes[i][0] == 'Doll') {
                for (let k = 0; k < listOfTypes[i][1].length; k++) {
                    let newArr = Object.entries(listOfTypes[i][1][k]);
                    let D = new Doll(newArr[0][1], newArr[1][1], newArr[2][1], newArr[3][1], newArr[4][1], newArr[5][1], newArr[6][1], newArr[7][1]);
                    priceOfToys = priceOfToys + parseInt(D.price);
                    if (priceOfToys <= this.gameRoom.budget) {
                        this.gameRoom.toysPool.push(D);
                        this.gameRoom.budget = this.gameRoom.budget - D.price;

                    }
                }
            }
            else if (listOfTypes[i][0] == 'Car') {
                for (let k = 0; k < listOfTypes[i][1].length; k++) {
                    let newArr = Object.entries(listOfTypes[i][1][k]);
                    let D = new Car(newArr[0][1], newArr[1][1], newArr[2][1], newArr[3][1], newArr[4][1], newArr[5][1], newArr[6][1]);
                    priceOfToys = priceOfToys + parseInt(D.price);
                    if (priceOfToys <= this.gameRoom.budget) {
                        this.gameRoom.toysPool.push(D);
                        this.gameRoom.budget = this.gameRoom.budget - D.price;

                    }
                }
            }


        } return this;
    }

    addKidsPool(kids) {
        this.gameRoom.kidsPool = [...this.gameRoom.kidsPool, ...kids];
        return this;

    }

    addToy(toy) {
        if (toy.price <= budget) {
            this.gameRoom.toysPool.push(toy);
        } else {
            console.log('Budget is not enough');
        }
        return this;
    }

    addKid(kid) {
        this.gameRoom.kidsPool.push(kid);
        return this;
    }

    build() {
        return this.gameRoom;
    }
}

module.exports = GameRoomBuilder;