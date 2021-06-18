const daysOfTheWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const maleNames = ["kwasi", "Kwandwo", "Kwabena", "kwaku", "yaw", "kofi", "kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function akanGen(d, m, y) {
let dd = parseInt(d);
let mm = parseInt(m);
let cc = Math.floor(parseInt(y) / 100);
let yy = parseInt(y.slice(-2));
let dayOfBirth = Math.floor((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
return dayOfBirth;
}
function userData() {
let day = document.getElementById("day").value
let month = document.getElementById("month").value
let year = document.getElementById("year").value
validation(day, month, year);
let id = akanGen(day, month, year)
return id;
}
function dataOutPut(e) {
e.preventDefault();
let birthIndex = userData();

if (document.getElementById("male").checked) {
alert ("your akan name is " + maleNames[birthIndex] + " you were born on " + daysOfTheWeek[birthIndex]);
} else if (document.getElementById("female").checked) {
alert ("your akan name is " + femaleNames[birthIndex] + " you were born on " + daysOfTheWeek[birthIndex]);
}
document.getElementById("form").reset();
};

function validation(d, m, y) {
if (d < 0 || d > 31 || d === "") {
alert("error day");
}
if (m < 0 || m > 12 || m === "") {
alert("month error")
}
if (y < 0 || y === "") {
alert("error year")
}
}
document.getElementById("submit").addEventListener("click", dataOutPut)