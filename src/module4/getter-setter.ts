// class BankAccount {
//     id: number;
//     private _balance: number;

//     constructor(id: number, balance: number) {
//         this.id = id;
//         this._balance = balance;
//     }

//     get balance() {
//         return this._balance;
//     }

//     set balance(amount: number) {
//         this._balance += amount;
//     }

// }

// class StudentAccount extends BankAccount {
//     constructor(id: number, balance: number) {
//         super(id, balance);
//     }

//     get balance() {
//         return super.balance + 100;
//     }
// }

// const bankAccount = new BankAccount(1, 2000);

// console.log(bankAccount);