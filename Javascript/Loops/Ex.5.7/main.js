let object = {
  Id: 1,
  type: "Icecream",
  description: "Milk product"
}
for (const prop in object) {
  console.log("Name of prop:" + prop +"-- value of prop:" + object[prop]);
}
let array = [];
for (const prop in object) {
  array.push(object[prop]);
    
}
console.log(Object.keys(object));
console.log(Object.values(object));
//console.log(array);


