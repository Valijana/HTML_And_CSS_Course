let maxNumber = 10;

let randomNumber = Math.floor(Math.random() * (maxNumber + 1));

let rightNumber = false;
console.log(randomNumber);
// ! ili === na primer rightNumber===false
while(!rightNumber) {
    let userNumber = prompt("Enter a number between 0 and" + maxNumber);
    userNumber = Number(userNumber);

    if (userNumber===randomNumber) {
        alert("You guessed the right number.Congrats!");
        rightnumber = true;
    }
    else if(userNumber>randomNumber) {
        alert("You guessed higher than the right number!Try again!" + "| rightNumber:" + randomNumber);
    } else {
        alert("You guessed lower than the right number!Try again!" + " | rightNumber:" + randomNumber);
    }
}