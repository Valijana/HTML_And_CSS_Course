let tableArray = [];
let value = 7;

for (let i = 0; i <= value; i++) {
   let tempArray = [];

   for (let j = 0; j <= value; j++) {
      if (i * j >36) {
         continue;
      }
      tempArray.push(i * j);
   }
   tableArray.push(tempArray);
}
console.log(tableArray);