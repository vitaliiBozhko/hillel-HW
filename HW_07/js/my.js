let arr = [],
    arrLength,
    sum = 0;
  //  randomValue = Math.round(Math.random()*10);

do {
    arrLength = Number(prompt(`Type array length`, `3`));
    arrLength = Math.round(Math.abs(arrLength))
    arr.length = arrLength;
} while (!arrLength || arrLength < 2 || arrLength > 10);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random()*10);
    sum += arr[i];
}

console.log(arr, `Sum is: ${sum}`);