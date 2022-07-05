/*let randomNumber = Math.floor(Math.random() * 10) + 1;
let i = 0;
let checkNumber = true;

while (checkNumber) {
    let number = prompt("Enter number between 1 to 10 - " + randomNumber);
    number = Number(number);

    if (number > randomNumber) {
        alert("You guessed higher then the number!");
    } else if (number < randomNumber) {
        alert("You guessed lower then the number!");
    } else if (number===randomNumber) {
        alert("You guessed the number you won!");
        checkNumber = false;
    }     
 }
 CODE FOR LOOP WITH IF STATEMENTS*/

/*let whileBool = false;
let doWhileBool = false;

while (whileBool) {
    console.log("Entered while loop");
    whileBool = false;
}
do {
    console.log("Entered do while loop");
    doWhileBool = false;
} while (doWhileBool);
 CODE FOR DO WHILE*/
     
/*for (let i = 0; i <= 10; i++) {
    console.log(i);
 }
CODE FOR FOR LOOP */

/*let myArray = ["First", "Second", "Third", "Fourth", "Fifth"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);    
}
CODE FOR ANOTHER EXAMPLE OF FOR FOR LOOP ELEMENT*/

/*let myArray = [];

for (let i = 0; i < 7; i++) {
    let myObject = {
        name: "Lesson " + (i+1),
        status: i % 2===0
  }  
}
myArray.push(myObject);
console.log(myObject);
ANOTHER EXAMPLE FOR FOR LOOP */