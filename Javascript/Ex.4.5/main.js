console.log("test");

let prize = prompt("5");
prize = Number(prize);

let message="My selection:";
switch (prize) {
    case 0: 
    case 1: 
        message = message + "coins;"
        break;
    case 2:
        message = message += "bear";
        break;
    case 3:
        message=message + "apples";
        break;
    case 4:
        
    
    case 5: 
    case 6: 
        break;
    default:
        break;
}
console.log(userInput);
console.log(message);

