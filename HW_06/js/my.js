let bun;
let hamburger = `hamburger`;
let cheeseburger = `cheeseburger`;
let price = 0;
do {
    bun = prompt(`Choose select bun: hamburger or cheeseburger`, `hamburger`);
    if (bun === hamburger) {
        price += 10;
    } else if (bun === cheeseburger) {
        price += 15;

        let doubleCheese = false;
        doubleCheese = confirm(`Would you like to add double cheese?`);
        if (doubleCheese) price += 5;
    }
} while (bun === null || !bun || (bun !== hamburger && bun !== cheeseburger));

let potato = confirm(`Would you like potato?`);
let potatoSize;
if (potato) {
    let potatoSmall = `small`;
    let potatoMedium = `middle`;
    let potatoLarge = `big`;
    potatoSize = prompt(`Choose potato size: small/middle/big`, potatoSmall);
    if (potatoSize === potatoSmall || potatoSize === null || !potatoSize) price += 10;
    else if (potatoSize === potatoMedium) price += 15;
    else if (potatoSize === potatoLarge) price += 20;
}

let sauce = confirm(`Would you like sauce?`);
let typeOfSauce;
if (sauce) {
    let ketchup = `ketchup`;
    let mayonnaise = `mayonnaise`;
    typeOfSauce = prompt(`Choose sauce: ketchup/mayonnaise`, ketchup);

    if (typeOfSauce === ketchup || typeOfSauce === null || !typeOfSauce) price += 2
    else if (typeOfSauce === mayonnaise) price += 3;
}

let order = bun && potatoSize && typeOfSauce;
if (order) {
document.write(`<h2>Your order is:</h2>
                <ol>
                    <li>Bun is: ${bun};</li>
                    <li>Potato size is: ${potatoSize};</li>
                    <li>Sauce is: ${typeOfSauce};</li>
                </ol>
                <p>Price is: ${price}.</p>
`)
} else if (!order) {
    document.write(`<h2>Your order is:</h2>
                <ol>
                    <li>Bun is: ${bun};</li>
                </ol>
                <p>Price is: ${price}.</p>
`)
}