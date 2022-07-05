let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(ele,ind) {
    console.log("Element:", ele);
    console.log("Type of element:", typeof ele);
    console.log("Index:", ind);
}

arr.forEach(printStuff);