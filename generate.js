
// moment
const moment = document.querySelector("moment");
console.log (moment);

let yearChosen = new Date().getFullYear(); // 2022
let monthChosen = new Date().getMonth(); // 11

function getNumberOfDays(year, month)  {
console.log(year, month);
let numDays = new Date (year, month + 1, 0).getDate();
return numDays;
}

console.log(getNumberOfDays)(2022, 1)();

var saveButton = $(".saveBtn");
console.log (saveBtn);














