// type Alphanumerice = number | string;

// function add(a: Alphanumerice, b: Alphanumerice): Alphanumerice {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   return `${a.toString}${b.toString}`;
// }

// add(1, 2);
// add("1", "2");

// type Person = {
//   name: string;
// };

// type Employee = Person & {
//   empId: number;
//   role: "admin";
// };

// function printPerson(person: Person | Employee) {
//   if ("role" in person) {
//     return `${person.name} is an employee`;
//   }
//   return `${person.name} is a person`;
// }

// const person: Person = {
//   name: "John",
// };

// const employee: Employee = {
//   name: "John",
//   empId: 1,
//   role: "admin",
// };

// printPerson(person);
// printPerson(employee);

// console.log(printPerson(employee));

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} the ${this.species} says ${this.sound}`);
//   }
// }

// class Dog extends Animal {
//     constructor(name: string) {
//         super(name, "dog", "woof");
//     }
//     }


// const dog = new Dog("Rex");
// dog.makeSound();

// class Cat extends Animal {
//     constructor(name: string) {
//         super(name, "cat", "meow");
//     }
//     }

// function isCat(animal: Animal): animal is Cat {
//     return animal.species === "cat";
// }

// function makeCatMakeSound(cat: Cat) {
//     cat.makeSound();
// }

// function makeAnimalMakeSound(animal: Animal) {
//     if (animal instanceof Cat) {
//         makeCatMakeSound(animal);
//     } else {
//         animal.makeSound();
//     }
// }

// const cat = new Cat("Tom");
// cat.makeSound();



