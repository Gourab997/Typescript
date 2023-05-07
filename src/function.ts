function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 1];

const newArray = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  age: number;
  addAge(num: number): string;
} = {
  name: "Alice",
  age: 20,
  addAge(num) {
    return `(${(this.age += num)})`;
  },
};

const friends = ["Bob", "Eve", "Alice"];
const newFriends = ["Carol", "David"];

friends.push(...newFriends);

console.log(friends);

//rest parameter
const greetFriends = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};

greetFriends("Bob", "Eve", "Alice");

const myBestFriends = {
  firstname: "Carol",
  age: 20,
  family: {
    mother: "Stacy",
    father: "John",
  },
};

const bestFriend = friends;

const {
  firstname,
  age,
  family: { mother, father },
} = myBestFriends;
