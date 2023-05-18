//interface

interface IEmployee {
    empCode: number;
    name: string;
    // getSalary: (number) => number; // arrow function
    // getManagerName(number): string; // normal function
    getSalary(empCode: number): number;
    getManagerName(empCode: number): string;
    

}

class Employee implements IEmployee {
    empCode: number;
    name: string;
    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }
    getSalary(empCode: number): number {
        return 20000;
    }
    getManagerName(empCode: number): string {
        return "Mary";
    }
}
