const products = [
    ['apple',10],
    ['banana',8],
    ['mango',20],
    ['grape',18]
];

function getPrice(products, seasonFunc) {
    let copiedProducts = JSON.parse(JSON.stringify(products));
    let sumResult = 0;
    for (let i=0; i<copiedProducts.length; i++) {
        for (let j=0;j<copiedProducts[i].length;j++) {
            if (typeof copiedProducts[i][j] === `number`) {
                if (seasonFunc === summerValue) {
                    sumResult += summerValue(copiedProducts[i][j])
                } else if (seasonFunc === winterValue) {
                    sumResult += winterValue(copiedProducts[i][j])
                } else if (seasonFunc !== summerValue && seasonFunc !== winterValue) {
                    sumResult += copiedProducts[i][j]
                }
            }
        }
    }
    return sumResult;
}

function summerValue(value){
    return value*0.8;
}

function winterValue(value){
    return value*2;
}

console.log( getPrice(products) );
console.log( getPrice(products, summerValue) );
console.log( getPrice(products, winterValue) );
