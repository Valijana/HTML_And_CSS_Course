let userName = prompt("Enter your name:");

let message;

switch (userName.toLocaleLowerCase) {
    case "boban":
    case "valmira":
    case "valentina":
    case"ljupco":
        message = "Hello friend!";
        break;
    default:
        message = "I don't know you!";
        break;
}
alert(message);
