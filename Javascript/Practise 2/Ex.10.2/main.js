


console.log(document.getElementById("main"));
console.log(document.getElementById("none"));

let myList = ["Bananas", "Apples", "Milk", "Chocolate"];

document.getElementById("main").innerHTML = "";
myList.forEach(element => {
    document.getElementById("main")
        .innerHTML += "<li>" + element + "</li>";
});