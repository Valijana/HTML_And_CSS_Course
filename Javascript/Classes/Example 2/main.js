class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }

    dogdescription() {
        console.log("Name:", this.dogName,"/","Weight:", this.weight,"/", "Color:", this.color, "/","Breed:", this.breed);
    }
}
let dog = new Dog("Maxi", "25kg", "Gold", "Labrador");

dog.dogdescription();
