let language = "JavaScript";
let message = `Let's learn ${ language } it's fun`;
console.log(message); 

let str = "Hello, what's your name?Is it \"Mike\"?";
let str2 = `Hello, what's your name?Is it "Mike" ?`;

testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof (testVariable);
    
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr,typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBoll, typeofstrToBool);

let nullToNr = null;
console.log("null", nullToNr, typeof nullToNr);


