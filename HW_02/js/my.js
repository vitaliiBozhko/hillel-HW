let firstName = "Vitalii";
let lastName = "Bozhko";
let yearOfBirth = "1997";


const CURRENT_YEAR = "2022";
console.log(Number(CURRENT_YEAR));

let age = Number(CURRENT_YEAR) - Number(yearOfBirth);

prompt("Type your birth year");
console.log(age);
prompt("Type your first name");
console.log(firstName);
prompt("Type your last name");
console.log(lastName);

console.log("User bio:", firstName, lastName ,age);