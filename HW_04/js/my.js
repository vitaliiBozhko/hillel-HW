const myStr = prompt("Type some text", "My name is Vitalii Bozhko");
const operationId = Number(prompt(`Type some number:
if you type 1 - you will know index
if you type 2 - you delete selected letter
if you type 3 - you change selected letter
if you type 4 - you will find out how many letters are in a string`));

if (operationId === 1) {
    let chooseNumber = Number(prompt("which letter index do you want to know (start from 0):", "4"));
    console.log(myStr.charCodeAt(chooseNumber));
} else if (operationId === 2) {
    let chooseNumber = Number(prompt("Which letter will you delete:", "6"));
    console.log(myStr.slice(0, chooseNumber) + myStr.slice(chooseNumber + 1));
} else if (operationId === 3) {
    const arr =["=)", "=(", ":)", ":(", "=D", ":D", "=P", ":P", ";D", ";)"];
    let chooseNumber = Number(prompt("Which letter will you change:", "3"));
    let smileIndex = getRandomIntInclusive(0, 9);
    console.log(myStr.slice(0, chooseNumber) + arr[smileIndex] + myStr.slice(chooseNumber + 1));
} else if (operationId === 4) {
    console.log(myStr.replaceAll(" ", "").length);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}