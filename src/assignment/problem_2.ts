function getAge(arr: Array<{ name: string; age: number }>) {
  let data = [];
  for (let person of arr) {
    if (person.age >= 18) {
      data.push(person);
    }
  }
  return data;
}

console.log(
  getAge([
    { name: "rahim", age: 18 },
    { name: "karim", age: 16 },
  ])
);
