const firstName = prompt("Type your first name", "Vitalii");
const lastName = prompt("Type your last name", "Bozhko");
const birthDay = Number(prompt("Type your birthday", "10"));
const birthMonth = Number(prompt("Type your birth month", "9"));
const birthYear = Number(prompt("Type your birth year", "1997"));

const CURRENT_YEAR = 2022;
const age = CURRENT_YEAR - birthYear;

let addText;
let isLeapYear;
if (Number(isLeapYear = (birthYear % 400 === 0))) {
    addText = age + " years old (leap year),"
} else if (Number(isLeapYear = (birthYear % 4 === 0))) {
    addText = age + " years old (leap year),"
} else if (Number(isLeapYear = (birthYear % 100 !== 0))) {
    addText = age + " years old,"
}

if ((birthDay >= 22 && birthMonth === 12) || (birthDay <= 19 && birthMonth === 1)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Capricorn ♑");
} else if ((birthDay >= 20 && birthMonth === 1) || (birthDay <= 18 && birthMonth === 2)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Aquarius ♒");
} else if ((birthDay >= 19 && birthMonth === 2) || (birthDay <= 20 && birthMonth === 3)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Pisces ♓");
} else if ((birthDay >= 21 && birthMonth === 3) || (birthDay <= 19 && birthMonth === 4)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Aries ♈");
} else if ((birthDay >= 20 && birthMonth === 4) || (birthDay <= 20 && birthMonth === 5)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Taurus ♉");
} else if ((birthDay >= 21 && birthMonth === 5) || (birthDay <= 20 && birthMonth === 6)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Gemini ♊");
} else if ((birthDay >= 21 && birthMonth === 6) || (birthDay <= 22 && birthMonth === 7)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Cancer ♋");
} else if ((birthDay >= 23 &&  birthMonth === 7) || (birthDay <= 22 && birthMonth === 8)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Leo ♌");
} else if ((birthDay >= 23 && birthMonth === 8) || (birthDay <= 22 && birthMonth === 9)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Virgo ♉");
} else if ((birthDay >= 23 && birthMonth === 9) || (birthDay <= 22 && birthMonth === 10)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Libra ♉");
} else if ((birthDay >= 23 && birthMonth === 10) || (birthDay >= 21 && birthMonth === 11)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Scorpio ♊");
} else if ((birthDay >= 22 && birthMonth === 11) || (birthDay <= 21 && birthMonth === 12)) {
    console.log("User Bio:", firstName, lastName + ",", addText, "Sagittarius ♊");
}



