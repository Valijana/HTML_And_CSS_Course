let array = [];

for (let i= 0; i< 10; i++) {
   array.push(i);
  
}
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  
}
for (const element of array) {
  console.log(element);
}