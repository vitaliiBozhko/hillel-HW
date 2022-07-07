// let firstName = "Vitalii";
// let lastName = "Bozhko";
// let yearOfBirth = 1997;

const CURRENT_YEAR = 2022;

let yearOfBirth = prompt("Type your birth year", 1997);
// console.log(yearOfBirth);

let firstName = prompt("Type your first name", 'Vitalii');
// console.log(firstName);

let lastName = prompt("Type your last name", 'Bozhko');
// console.log(lastName);

let age = CURRENT_YEAR - yearOfBirth;

console.log("User bio:", firstName, lastName ,age);