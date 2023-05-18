// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     display(): void {
//         console.log(this.name);
//     }
// }

// class Employee extends Person {
//     empCode: number;
//     constructor(name: string, code: number) {
//         super(name);
//         this.empCode = code;
//     }
//     show(): void {
//         console.log(this.empCode);
//     }
// }

// let emp: Person = new Employee("James", 100);
// emp.display(); //James

// let emp1: Person = new Employee("James", 100);
// (emp1 as Employee).show(); //Compiler Error
// // The above example shows that the method show() is not available to the variable emp of type Person.
// // This is because the variable emp is of type Person and it can only access the members of Person.
// // To access the members of the derived class, we need to typecast the variable emp to Employee as shown below:
// let emp2: Person = new Employee("James", 100);
// (emp2 as Employee).show(); //Compiler Error
// // The above example shows that the method show() is not available to the variable emp of type Person.
// // This is because the variable emp is of type Person and it can only access the members of Person.
// // To access the members of the derived class, we need to typecast the variable emp to Employee as shown below:
// let emp3: Person = new Employee("James", 100);
// (emp3 as Employee).show(); //Compiler Error