
let myDate = new Date();
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August",
   "September", "October", "November", "December"];

let date = myDate.getDate();
let year = myDate.getFullYear();
let month = myDate.getMonth();
let monthName = monthArray[month];
console.log(date.toString(), "-", monthName, "-", year.toString());
console.log(`${date}-${monthName}-${year}`);











