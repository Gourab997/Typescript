// class Person {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `${this.name} is sleeping for ${hours} hours`;
//   }
// }

// class Student extends Person {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }

// const student = new Student("John", 20, "Dhaka");

// class Teacher extends Person {
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   takeClasses(classes: string): string {
//     return `${this.name} is taking ${classes} classes`;
//   }
// }

// const teacher = new Teacher("John", 20, "Dhaka", "Lecturer");
// teacher.makeSleep(10);
