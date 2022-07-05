let arr1 = ["squirel", 5, "Tjed",new Date(), true];

function checkString(x, y) {
    return typeof x === "string";
}

let filtriranArr = arr1.filter(x => typeof x === "string");

console.log(filtriranArr);