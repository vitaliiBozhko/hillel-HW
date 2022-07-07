// let firstName = "Vitalii";
// let lastName = "Bozhko";
// let yearOfBirth = 1997;

const CURRENT_YEAR = 2022;

const yearOfBirth = prompt("Type your birth year", 1997);
// console.log(yearOfBirth);

const firstName = prompt("Type your first name", "Vitalii");
// console.log(firstName);

const lastName = prompt("Type your last name", "Bozhko");
// console.log(lastName);

const age = CURRENT_YEAR - yearOfBirth;

console.log("User bio:", firstName, lastName + ",",  age, "years old");