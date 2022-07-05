let myArray = [];

for (let i = 0; i < 10; i++) { };

function something(x, y) {
   return x+y
}
for (let i= 0; i < 10; i++) {
   let result = something(i * 5, i * i);
   myArray.push(result);
}
console.log(myArray);
   

