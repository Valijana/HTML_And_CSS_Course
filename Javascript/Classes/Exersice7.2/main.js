class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullName() {
        return this.firstname + " " + this.lastname;
    }
}
let p1 = new Person("Betty", "Boop");
let p2 = new Person("Max", "White");



console.log("Hello,", p1.fullName());
console.log("Hello,", p2.fullName());