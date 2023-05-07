// type users = {
//   name: string;
//   age: number;
// };

// type extendedUser = users & {
//   address: string;
// };

// interface IUser {
//   name: string;
//   age: number;
// }

// interface IExtendedUser extends IUser {
//   address: string;
// }

// const users: IExtendedUser = {
//   name: "emni",
//   age: 20,
//   address: "Dhaka",
// };

// // const userWithTypeAlias: users = {
// //   name: "emni",
// //   age: 20,
// // };

// // userWithTypeAlias.name = "emni 2";

// // const userWithTypeInterface: IUser = {
// //   name: "emni 3",
// //   age: 200,
// // };

// // userWithTypeInterface.name = "emni 4";

// type rollNumber = number;

// type addNumbersType = (num1: rollNumber, num2: rollNumber) => number;

// const addNumbers = (num1: rollNumber, num2: rollNumber): number => {
//   return num1 + num2;
// };

// type rollNumberType = number[];

// interface IRollNumbers {
//   [index: number]: number;
// }

// const rollNumbers: IRollNumbers = [1, 2, 3, 4, 5];
