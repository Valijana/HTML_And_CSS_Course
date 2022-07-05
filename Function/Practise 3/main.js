//Practise 1
/*function logname() {
    console.log("Vali");
}
function logNameWithParams(ime) {
    console.log(ime);
}
console.log("Prvo ime");*/

//Practise 2
/*let time = 360;
function paramTime(whichTime) {
    let result = whichTime / 60;
    return result;
}
paramTime(time);
console.log(paramTime(time));
time = 390;
console.log(paramTime(time));*/

// 25. Write a JavaScript function that accept a list of country
// names as input and returns the longest country name as output.
// Go to the editor
// Sample function :
// Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"


//Practise 3
/*let arrOfCountries = ["United States of America", "Australia", "Germany", "North Macedonia"];
arrOfCountries[4];
console.log(arrOfCountries[4]);
function longestCountryName(arr) {
   let longName = "";
console.log(typeof arr );
   if (typeof arr === "object" && arr.length > 0) {

      for (let i = 0; i < arr.length; i++) {
         const element = arr[i];
         if (longName === "") {
            longName = element;
         } else if (longName.length < element.length) {
            longName = element;
         }
      }

      return longName;
   } else {
      return longName;
   }

}
let longestName = longestCountryName(arrOfCountries);
console.log(longestName, longestName.length);*/
//or
/*function longestCountryName(arr) {
    let longestName = "";
    if (typeof arr === "object" && arr.length > 0) 
       for (let i = 0; i < arr.length; i++) 
          longestName = longestName.length < arr[i].length ? arr[i] : longestName
 
    console.log(longestName, longestName.length);
 }*/

//Calculator exercise

// program for a simple calculator
/*let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}*/

/*function getRecursive(num){
   console.log(num);
   if (num>0) {
      getRecursive(--num);
      num++;  
   }
   console.log('End of call', num);
}

getRecursive(3);*/

function logRecursive(nr){
   console.log("Started function:",nr);
   if (nr>0) {
      logRecursive(nr-1);
   } else {
      console.log("Done with recursion");
   }
   console.log("Ended function:", nr);
}

logRecursive(3);