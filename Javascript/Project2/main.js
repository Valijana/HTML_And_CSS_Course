console.log("test");

const theList = ["Laurence", "Svekis", true, 35, null, undefined, { test: "one", score: 55 }, ["one", "two"]];

theList.shift();

theList.pop();

theList.unshift("FIRST");

theList.splice(3, 4, "hello World");

console.log(theList);

let index = theList.indexOf(true);
theList[index] = "MIDDLE";
console.log(theList);

theList.push("LAST");
console.log(theList);
