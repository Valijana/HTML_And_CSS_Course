let myString = "I love Javascript";

function replaceVowels(str) {
    let myLowerCaseString = str.toLowerCase();
    let myVowelArray = ["a","e","i","o","u"];


    [].forEach(element => {
        myLowerCaseString=myLowerCaseString.replaceAll(element);
        
    });
    return myLowerCaseString;
}
console.log(replaceVowels(myString));

























