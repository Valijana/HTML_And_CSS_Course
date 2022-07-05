
let randomNumber = Math.floor(Math.random() * 6);

let userQuestion = prompt("Ask a question?");

//console.log(userQuestion);

let message = "";

switch (randomNumber) {
    case 0:
        message = "Never";
        break;
    case 1:
        message = "Maybe";
        break;
    case 2:
    case 3:
        message = "Yes";
        break;
    case 4: 
        message = "In your dreams!";
        break;
    case 5: 
        message = "Bilo sto!";
        break;
    default:
        message = "I didn't uderstand the question."
        break;
}

console.log(userQuestion + "?");
console.log("----------------------");
console.log(message);