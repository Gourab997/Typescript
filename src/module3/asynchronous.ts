// const makePromise = () => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Hello World";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Error");
//     }
//   });
// };

// const result = makePromise();

// const getPromiseData = async (): Promise<string> => {
//   const result = await makePromise();
//   return result;
// };

// interface IToDo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// // json placeholder

// const getTodos = async (): Promise<IToDo> => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   return data;
// };

// const getTodoData = async (): Promise<void> => {
//   const result = await getTodos();
//   console.log(result);
// };
