const GameRoom = require('./gameRoom/gameRoom');
const Person = require('./person/person');
const Kid = require('./person/kid');
const Parent = require('./person/parent');
const Toy = require('./toy/toy');
const Doll = require('./toy/doll/doll');
const Cube = require('./toy/cube');
const Car = require('./toy/car');
const Ball = require('./toy/ball');
const GameRoomBuilder = require('./gameRoom/gameRoomBuilder');
const TheatreDoll = require('./toy/doll/theatreDoll');
const KewpieDoll = require('./toy/doll/kewpieDoll');
const BuppyDoll = require('./toy/doll/buppyDoll');
const prompt = require('prompt-sync')();
const data = require('E:/JsCourse/Gameroom/data/data.json');

let kids = [
    new Kid('Darya', 'Lapitskaya', new Date('September 08, 1996')),
    new Kid('Maria', 'Zayats', new Date('March 05, 1994')),
    new Kid('Roman', 'BlaBla', new Date('March 10, 1993')),
];

let kids2 = [
    new Kid('aaa', 'aaa', new Date('September 08, 1996')),
    new Kid('bbb', 'bbb', new Date('March 05, 1994')),
    new Kid('ccc', 'ccv', new Date('March 10, 1993')),
];

let toys = [
    new Toy(4, 'large', '18+', 'wood', 'red', 'Ford'),
    new Toy(10, 'small', '18+', 'metal', 'blue', 'BMW'),
    new Toy(15, 'big', '10', 'wood', 'orange', 'Nike'),
    new Toy(10, 'big', '3', 'wood', 'blue', 'Barbie'),
    new BuppyDoll(10, 'small', '3', 'wood', 'blue', 'Barbie', 'aaa', false)
];

let toys2 = [
    new Toy(1, 'large', '18+', 'wood', 'red', 'new1'),
    new Toy(1, 'small', '18+', 'metal', 'blue', 'new2'),
    new Toy(10, 'big', '10', 'wood', 'orange', 'new3'),
];
let toyToBeAdded = new Toy(100, 'big', '10', 'wood', 'orange', 'new3');
let room;
(async () => {
    let isStartMenu = true;
    let isMenu = true;
    while (isStartMenu) {
        const budget = parseInt(await prompt('Welcome to Gameroom! Please enter the start budget for your gameroom '));
        const option = await prompt('Choose the way for creation of Toys pool:     1-from array declared in index.js     2 - from JSON file     0-exit');
        switch (option) {
            case '1':
                room = new GameRoomBuilder(budget).addKidsPool(kids).addToysPool(toys).build();
                isStartMenu = false;
                break;
            case '2':
                room = new GameRoomBuilder(budget).addKidsPool(kids).addToysPoolJson().build();
                isStartMenu = false;
                break;
            case '0':
                isStartMenu = false;
                break;
            default:
                console.log('Cannot recognize your answer. Please try again.');
                break;
        }
    }
    while (isMenu) {
        const menu = await prompt('Please select the section: 1 - Kids    2- Toys    3 - Budget   0 - exit from menu ');
        // const menu = await prompt('Please select option: \n1 - show list of toys \n2- show list of kids \n3 - Add new toy \n4 - Filter toys \n0 - exit from menu ');
        switch (menu) {
            case '1':
                let isKidMenu = true;
                while (isKidMenu) {
                    const kidMenu = await prompt('Please select the option:   1 - View list of Kids    2 - Add Kid    3 - Get info about Kid parent    4 - Add Parent info for Kid    0 - back ');
                    switch (kidMenu) {
                        case '1':
                            console.table(room.kidsPool);
                            break;
                        case '2':
                            let kidName = await prompt('Please enter the name of Kid');
                            let kidSurname = await prompt('Please enter the surname of Kid');
                            let kidDateOfBirth = new Date(await prompt('Please enter the date of birth'));
                            let newKid = new Kid(kidName, kidSurname, kidDateOfBirth); 0
                            room.addKid(newKid);
                            let isAddParent = await prompt('\nWould you like to add Parents info?   1- Add 1 parent info   2 - Add 2 parents info    3- Not add parents info');
                            switch (isAddParent) {
                                case '1':
                                    let parentName = await prompt('\nPlease enter the name of Parent');
                                    let parentSurname = await prompt('\nPlease enter the name of Parent');
                                    let parentDateOfBirth = new Date(await prompt('\nPlease enter the date of birth of Parent'));
                                    newParent = new Parent(parentName, parentSurname, parentDateOfBirth);
                                    newKid.addParent(newParent);
                                    break;
                                case '2':
                                    for (let i = 0; i < 2; i++) {
                                        let parentName = await prompt('Please enter the name of Parent');
                                        let parentSurname = await prompt('Please enter the name of Parent');
                                        let parentDateOfBirth = new Date(await prompt('Please enter the date of birth of Parent'));
                                        newParent = new Parent(parentName, parentSurname, parentDateOfBirth);
                                        newKid.addParent(newParent);
                                    }
                                    break;
                                case '3':
                                    break;
                                default:
                                    console.log('Cannot recognize your answer. Please try again.');
                                    break;

                            }
                            break;

                        case '3':
                            console.table(kids);
                            let kidID = await prompt('Please enter the id of Kid');
                            room.getKidParentsInfo(kidID);
                            break;
                        case '4':
                            console.table(kids);
                            let kidIDForParent = await prompt('Please enter the id of Kid');
                            let parentName = await prompt('Please enter the name of Parent');
                            let parentSurname = await prompt('Please enter the name of Parent');
                            let parentDateOfBirth = await prompt('Please enter the date of birth of Parent');
                            newParent = new Parent(parentName, parentSurname, parentDateOfBirth);
                            room.getKidsPool()[kidIDForParent].addParent(newParent);
                            break;
                        case '0':
                            isKidMenu = false;
                            break;
                        default:
                            console.log('Cannot recognize your answer. Please try again.');
                            break;
                    }
                }
            case '2':
                let isToyMenu = true;
                while (isToyMenu) {
                    const toyMenu = await prompt('Please select the option:    1 - View list of Toys    2 - Add Toy (oblect declared in index.js)    3 - Sort Toys by Price    4 - Filter Toys     0 - back ');
                    switch (toyMenu) {
                        case '1':
                            console.table(toys);
                            break;
                        case '2':
                            room.addToy(toyToBeAdded);
                            break;
                        case '3':
                            const sortOption = await prompt('Please enter "asc" or "desc" for sort toys by price');
                            room.sortToysbyPrice(sortOption);
                            break;
                        case '4':
                            let isParamMenu = true;
                            let params = {};
                            // add filtered arr???
                            while (isParamMenu) {
                                const paramMenu = await prompt('Please enter the field name (one field) to be filtered. E.g. "price", "material", "color", etc.   0 - back');
                                if (paramMenu != "0") {
                                    const value = await prompt(' Please enter the value: ');

                                    if (Object.entries(params).length < 1) {
                                        params[paramMenu] = value;
                                        let filtArr = room.filterToys(params);
                                        console.log("The filter results:");
                                        console.table(filtArr);
                                    } else {
                                        let isKeep = false;
                                        if (isKeep) {
                                            params[paramMenu] = value;
                                            let filtArr = room.filterToys(params);
                                            console.log("The filter results:");
                                            console.table(filtArr);
                                        } else {
                                            params = {};
                                            console.table(filtArr);
                                        }

                                    }
                                    // params[paramMenu] = value;
                                    // let filtArr = room.filterToys(params);
                                    // console.log("The filter results:");
                                    // console.table(filtArr);


                                } else {
                                    isParamMenu = false;

                                }
                            }
                            break;
                        case '0':
                            isToyMenu = false;
                            break;
                        default:
                            console.log('Cannot recognize your answer. Please try again.');
                            break;
                    }
                }
            case '3':
                const budgetMenu = await prompt('Please select the option:    1 - View current budget for gameroom    2 - Donate to the gameroom    0 - back ');
                switch (budgetMenu) {
                    case '1':
                        console.log(room.budget);
                        break;
                    case '2':
                        const donate = parseInt(await prompt('Please enter the amount of money for donatate: '));
                        room.addBudget(donate);
                        console.log(`Thank you for donate in ${donate}! Current budget is: ${room.budget}`);
                        break;
                    case '0':
                        isBudgetMenu = false;
                        break;
                    default:
                        console.log('Cannot recognize your answer. Please try again.');
                        break;
                }
                break;



            case '0':
                isMenu = false;
                break;

            default:
                console.log('Cannot recognize your answer. Please try again.');
                break;
        }
    }

})();
