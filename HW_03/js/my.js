const firstName = prompt("Type your first name", "Vitalii");
const lastName = prompt("Type your last name", "Bozhko");
const birthDay = Number(prompt("Type your birthday", "10"));
const birthMonth = Number(prompt("Type your birth month", "9"));
const birthYear = Number(prompt("Type your birth year", "1997"));

const CURRENT_YEAR = 2022;
const age = CURRENT_YEAR - birthYear;

let addText;
let isLeapYear = (birthYear % 400 === 0);
if (isLeapYear === true) {
    addText = age + " years old (leap year)"
} else if ((isLeapYear = (birthYear % 4 === 0) && (isLeapYear = (birthYear % 100 !== 0))) === true) {
    addText = age + " years old (leap year)"
} else if (isLeapYear === false) {
    addText = age + " years old"
}

let zodiac;
if ((birthDay >= 22 && birthMonth === 12) || (birthDay <= 19 && birthMonth === 1)) {
    zodiac = "Capricorn ♑"
} else if ((birthDay >= 20 && birthMonth === 1) || (birthDay <= 18 && birthMonth === 2)) {
    zodiac = "Aquarius ♒"
} else if ((birthDay >= 19 && birthMonth === 2) || (birthDay <= 20 && birthMonth === 3)) {
    zodiac = "Pisces ♓"
} else if ((birthDay >= 21 && birthMonth === 3) || (birthDay <= 19 && birthMonth === 4)) {
    zodiac = "Aries ♈"
} else if ((birthDay >= 20 && birthMonth === 4) || (birthDay <= 20 && birthMonth === 5)) {
    zodiac = "Taurus ♉"
} else if ((birthDay >= 21 && birthMonth === 5) || (birthDay <= 20 && birthMonth === 6)) {
    zodiac = "Gemini ♊"
} else if ((birthDay >= 21 && birthMonth === 6) || (birthDay <= 22 && birthMonth === 7)) {
    zodiac = "Cancer ♋"
} else if ((birthDay >= 23 &&  birthMonth === 7) || (birthDay <= 22 && birthMonth === 8)) {
    zodiac = "Leo ♌"
} else if ((birthDay >= 23 && birthMonth === 8) || (birthDay <= 22 && birthMonth === 9)) {
    zodiac = "Virgo ♉"
} else if ((birthDay >= 23 && birthMonth === 9) || (birthDay <= 22 && birthMonth === 10)) {
    zodiac = "Libra ♉"
} else if ((birthDay >= 23 && birthMonth === 10) || (birthDay >= 21 && birthMonth === 11)) {
    zodiac = "Scorpio ♊"
} else if ((birthDay >= 22 && birthMonth === 11) || (birthDay <= 21 && birthMonth === 12)) {
    zodiac = "Sagittarius ♊"
}

console.log("User Bio:", firstName, lastName + ",", addText, zodiac);
