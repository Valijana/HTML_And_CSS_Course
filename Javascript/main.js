/* 
multiline 
*/
//console.log("Valmira Izeti");
/// Global variable
let lname = "Izeti";

function FirstName(firstname) { // start of block scope
    // Local Variable
    let fname = firstname;
    /*
    This fucntion is concatinating two 
    strings with empty space between. 
    */
    console.log(fname + " " + lname);
} // end of blog scope

function LastName() {
    /*
    This fuction is showing
    only the last name into 
    the console.
    */
    console.log(lname);

}
function bio() {
    
}

// This line of code is calling the first funtion.
FirstName("Valmira");
// This line of code is calling the second funtion.
LastName();