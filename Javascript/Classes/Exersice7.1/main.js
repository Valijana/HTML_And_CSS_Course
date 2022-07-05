class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let p1 = new Person("Betty", "Boop");
let p2 = new Person("Max", "White");

console.log("Hello", p1.firstname, p1.lastname);
console.log("Hello", p2.firstname, p2.lastname);