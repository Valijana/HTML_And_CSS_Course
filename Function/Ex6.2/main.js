let myArray = ["Smart", "Strong", "Beautiful", "Sweet"];

function description () {
    let nameOfUser = prompt("What's your name?");
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(nameOfUser, "is", myArray[randomNumber]);
}

description();