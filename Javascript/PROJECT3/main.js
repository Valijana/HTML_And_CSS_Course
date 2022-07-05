//1.First get a number from the user
//deklarirame variabla so vrednost of prompt("Poraka do userot")

//2.Ja zememe variblata od userot i da ja konvertirame vo broj Number (variabla)
//Vrednosta od Number (variabla) mose da ja dodelime na samata variabla ili da si deklarirame nova

//3.Treba da dobieme random broj so pomos Math.random()* 100 za da dobieme vrednost od 0 do 100
//ja zaokruzuvame vrednosta so Math.floor(decimala)

//4.deklarirame variabla prazna so poraka || example:let message;

/* 5. if () kade bi ja proverile logikata
if(brojOdUser < randomBrojot) {
        message = "Your number " + brojOdUser + " is smaller then " + randomBrojot;
    } else if (brojOdUser === randomBrojot) {
        message = "Your number " + brojOdUser + " is equal to " + randomBrojot;
    } else if (brojOdUser > randomBrojot) {
        message = "Your number " + brojOdUser + " is grater then " + randomBrojot;
    } else {
        message = "You entered invalid number!" }*/
    
 //6. Ja prakame porakata vo consola || example console.log(message);

let userInput = prompt("Enter number from 0 to 10:");
console.log(userInput);
let userNumber = Number(userInput);
console.log(userNumber);


let randomNumber = Math.floor(Math.random()*10);
let message;

if (userInput<randomNumber) {
    message = `Your number ${userInput} is smaller then ${randomNumber}`;
} else if (userInput === randomNumber) {
    message = `Your number ${userInput} is equal to ${randomNumber}`;
} else if (userInput > randomNumber) {
    message = `Your number ${userInput} is greater then ${randomNumber}`;
} else {
    message="You entered invalid number!"
}
    
alert(message);


