type GenericTuple<X, Y> = [X, Y];

interface ICrush<T> {
  name: string;
  husband: T;
}

const crush1: ICrush<string> = {
  name: "Alice",
  husband: "Bob",
};

const crush2: ICrush<number> = {
  name: "Alice",
  husband: 20,
};

const crush3: ICrush<boolean> = {
  name: "Alice",
  husband: true,
};

interface ICrush2<T, U = undefined> {
  name: string;
  husband: {
    name: T;
    age: U;
  };
}

const crush4: ICrush2<string, number> = {
  name: "Alice",
  husband: {
    name: "Bob",
    age: 20,
  },
};

const relation: GenericTuple<string, number> = ["Alice", 20];

const relationWithSalary: GenericTuple<{ name: string; age: number }, string> =
  [
    {
      name: "emni",
      age: 20,
    },
    "dasd",
  ];

type GenericArray<T> = Array<T>;

const rollNumber: number[] = [1, 2, 3, 4, 5];

const rollNumber2: GenericArray<number> = [1, 2, 3, 4, 5];

const rollNumber3: GenericArray<string> = ["1", "2", "3", "4", "5"];

const rollNumber4: Array<string> = ["1", "2", "3", "4", "5"];

const rollNumber5: Array<string | number> = ["1", "2", "3", "4", "5", 1];

const rollNumber6: Array<string | number | boolean> = [
  "1",
  "2",
  "3",
  "4",
  "5",
  1,
  true,
];

const rollNumber7: Array<string | number | boolean | object> = [
  "1",
  "2",
  "3",
  "4",
  "5",
  1,
  true,
  {
    name: "emni",
    age: 20,
    address: "Dhaka",
  },
];
