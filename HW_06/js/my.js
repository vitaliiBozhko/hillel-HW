let bun;
let hamburger = `hamburger`;
let cheeseburger = `cheeseburger`;
let price = 0;
const two = 2;
const three = 3;
const five = 5;
const ten = 10;
const fifteen = 15;
const twenty = 20;

do {
    bun = prompt(`Choose select bun: hamburger or cheeseburger`, `hamburger`);
    if (bun === hamburger) {
        price += ten;
    } else if (bun === cheeseburger) {
        price += fifteen;

        let doubleCheese = false;
        doubleCheese = confirm(`Would you like to add double cheese?`);
        if (doubleCheese) price += five;
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
    else if (potatoSize === potatoMedium) price += fifteen;
    else if (potatoSize === potatoLarge) price += twenty;
}

let sauce = confirm(`Would you like sauce?`);
let typeOfSauce;
if (sauce) {
    let ketchup = `ketchup`;
    let mayonnaise = `mayonnaise`;
    typeOfSauce = prompt(`Choose sauce: ketchup/mayonnaise`, ketchup);

    if (typeOfSauce === ketchup || typeOfSauce === null || !typeOfSauce) price += two
    else if (typeOfSauce === mayonnaise) price += three;
}

document.write(`<h2>Your order is:</h2>
    <ol>
        <li>Bun is: ${bun};</li>
        ${potato ? `<li>Potato size is: ${potatoSize};</li>` : ``}
        ${sauce ? `<li>Sauce is: ${typeOfSauce};</li>` : ``}
    </ol>
    <p>Price is: ${price}.</p>
`);