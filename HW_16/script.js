const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee {
    constructor(coffee) {
        Object.assign(this, coffee)
    }


    getIngredients(){
        let renderIngredients = Object
            .keys(this.ingredients) // [espresso: 20, "milk foam"];
            .map(ing => `<p style="height: ${this.ingredients[ing]}%" class="ingredient ${ing.replaceAll(` `,`__`)}">
                ${ing}
            </p>`)
            .join(``);
        return `<div class="coffee__ingredients">${renderIngredients}</div>`;
    }

    makeCoffee(){
        return  `<div class="cup">
           <div class="coffee">
                ${this.getIngredients()}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`
    }
}

class Espresso extends Coffee {
    constructor(coffee) {
        super(coffee);

    }
    makeCoffee() {
        return `<div class="cup">
            <div class="coffee coffee--espresso">
                ${this.getIngredients()}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }
}
class EspressoMilk extends Coffee {
    constructor(coffee) {
        super(coffee);
    }
    makeCoffee() {

        return `<div class="cup">
            <div class="coffee coffee--espressoMilk">
                ${this.getIngredients()}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }
}
class Alcoholic extends Coffee {
    constructor(coffee) {
        super(coffee);
    }
    makeCoffee() {
        return `<div class="cup">
            <div class="coffee coffee--alcoholic">
                ${this.getIngredients()}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }
}
class Dessert extends Coffee {
    constructor(coffee) {
        super(coffee);
    }
    makeCoffee() {
        return `<div class="cup">
            <div class="coffee coffee--dessert">
                ${this.getIngredients()}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }
}


let espressoClass = COFFEE_TYPES.Espresso.map(item => new Espresso(item)).map(item => item.makeCoffee()).join(``)
let espressoMilkClass = COFFEE_TYPES.EspressoMilk.map(item => new EspressoMilk(item)).map(item => item.makeCoffee()).join(``)
let alcoholicClass = COFFEE_TYPES.Alcoholic.map(item => new Alcoholic(item)).map(item => item.makeCoffee()).join(``)
let dessertClass = COFFEE_TYPES.Dessert.map(item => new Dessert(item)).map(item => item.makeCoffee()).join(``)

document.write(`<section class="cups">${espressoClass}${espressoMilkClass}${alcoholicClass}${dessertClass}</section>`)