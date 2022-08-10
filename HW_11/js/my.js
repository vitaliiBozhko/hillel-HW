const products = [
    ['apple',10],
    ['banana',8],
    ['mango',20],
    ['grape',18]
];

const getPrice = (products, seasonFunc) => {
    let copiedProducts = JSON.parse(JSON.stringify(products));
    let sumResult = 0;
    for (let i=0; i<copiedProducts.length; i++) {
        sumResult += typeof seasonFunc === `function`
            ? seasonFunc(copiedProducts[i][1])
            : copiedProducts[i][1];
    }

    return sumResult;
}

let  summerValue = value => value*0.8;
let winterValue = value => value*2;

console.log( getPrice(products) );
console.log( getPrice(products, summerValue) );
console.log( getPrice(products, winterValue) );
