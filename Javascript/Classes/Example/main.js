class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog = new Dog("Maxi", "25kg", "gold", "labrador");
console.log(dog);

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let p = new Person("Valmira", "Izeti");
console.log(p.firstname, p.lastname);