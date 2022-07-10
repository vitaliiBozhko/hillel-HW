const firstName = prompt("Type your first name", "Vitalii");
const lastName = prompt("Type your last name", "Bozhko");
const birthDay = Number(prompt("Type your birthday", "10"));
const birthMonth = Number(prompt("Type your birth month", "9"));
const birthYear = Number(prompt("Type your birth year", "1997"));
const CURRENT_YEAR = 2022;
let age = CURRENT_YEAR - birthYear;

let isLeapYear = (birthYear % 400) || (birthYear % 4);
if (isLeapYear === 0) {
    age = (CURRENT_YEAR - birthYear) + " years old (leap year),"
} else if (isLeapYear !==0) {
    age = (CURRENT_YEAR - birthYear) + " years old,"
}

if (birthDay >= 22 && birthMonth === 12) {
    console.log("User Bio:", firstName, lastName + ",", age, "Capricorn ♑");
} else if (birthDay <= 19 && birthMonth === 1) {
    console.log("User Bio:", firstName, lastName + ",", age, "Capricorn ♑");
} else if (birthDay >= 20 && birthMonth === 1) {
    console.log("User Bio:", firstName, lastName + ",", age, "Aquarius ♒");
} else if (birthDay <= 18 && birthMonth === 2) {
    console.log("User Bio:", firstName, lastName + ",", age, "Aquarius ♒");
} else if (birthDay >= 19 && birthMonth === 2) {
    console.log("User Bio:", firstName, lastName + ",", age, "Pisces ♓");
} else if (birthDay <= 20 && birthMonth === 3) {
    console.log("User Bio:", firstName, lastName + ",", age, "Pisces ♓");
} else if (birthDay >= 21 && birthMonth === 3) {
    console.log("User Bio:", firstName, lastName + ",", age, "Aries ♈");
} else if (birthDay <= 19 && birthMonth === 4) {
    console.log("User Bio:", firstName, lastName + ",", age, "Aries ♈");
} else if (birthDay >= 20 && birthMonth === 4) {
    console.log("User Bio:", firstName, lastName + ",", age, "Taurus ♉");
} else if (birthDay <= 20 && birthMonth === 5) {
    console.log("User Bio:", firstName, lastName + ",", age, "Taurus ♉");
} else if (birthDay >= 21 && birthMonth === 5) {
    console.log("User Bio:", firstName, lastName + ",", age, "Gemini ♊");
} else if (birthDay <= 20 && birthMonth === 6) {
    console.log("User Bio:", firstName, lastName + ",", age, "Gemini ♊");
} else if (birthDay >= 21 && birthMonth === 6) {
    console.log("User Bio:", firstName, lastName + ",", age, "Cancer ♋");
} else if (birthDay <= 22 && birthMonth === 7) {
    console.log("User Bio:", firstName, lastName + ",", age, "Cancer ♋");
} else if (birthDay >= 23 && birthMonth === 7) {
    console.log("User Bio:", firstName, lastName + ",", age, "Leo ♌");
} else if (birthDay <= 22 && birthMonth === 8) {
    console.log("User Bio:", firstName, lastName + ",", age, "Leo ♌");
} else if (birthDay >= 23 && birthMonth === 8) {
    console.log("User Bio:", firstName, lastName + ",", age, "Virgo ♍");
} else if (birthDay <= 22 && birthMonth === 9) {
    console.log("User Bio:", firstName, lastName + ",", age, "Virgo ♍");
} else if (birthDay >= 23 && birthMonth === 9) {
    console.log("User Bio:", firstName, lastName + ",", age, "Libra ♎");
} else if (birthDay <= 22 && birthMonth === 10) {
    console.log("User Bio:", firstName, lastName + ",", age, "Libra ♎");
} else if (birthDay >= 23 && birthMonth === 10) {
    console.log("User Bio:", firstName, lastName + ",", age, "Scorpio ♏");
} else if (birthDay <= 21 && birthMonth === 11) {
    console.log("User Bio:", firstName, lastName + ",", age, "Scorpio ♏");
} else if (birthDay >= 22 && birthMonth === 11) {
    console.log("User Bio:", firstName, lastName + ",", age, "Sagittarius ♐");
} else if (birthDay <= 21 && birthMonth === 12) {
    console.log("User Bio:", firstName, lastName + ",", age, "Sagittarius ♐");
}



