const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const capitalize = item => item[0].toUpperCase() + item.slice(1).toLowerCase();

class Vegetable{
    constructor(product){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;

        Object.assign(this, product)
    }

    getPrice(){
        return this.season ? this.seasonKoef * this.price : this.price;
    }

    getInfo(){
        let key = Object.keys(this)
            .map(key => `${capitalize(key)}: ${key === `price` ? this.getPrice(this[key]) : this[key]}`)
            .join(`; `);

        return key;
    }
}

let newVegetable = vegetables.map(product => new Vegetable(product));
newVegetable.forEach(product => product.getPrice());
newVegetable.forEach(product => product.getInfo());
let LIs = newVegetable.map(product => `<li>${product.getInfo()}</li>`)
    .join(``);

document.write(`<ul>${LIs}</ul>`);
