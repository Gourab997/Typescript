const addInfo = <
  T extends {
    name: string;
    age: number;
    hasPet: boolean;
  }
>(
  myInfo: T
) => {
  const petName = "John";
  const newData = {
    ...myInfo,
    petName,
  };
  return newData;
};

const myInfo: MyInfoType = {
  name: "John",
  age: 20,
  hasPet: false,
};

type MyInfoType = {
  name: string;
  age: number;
  hasPet: boolean;
  petName?: string;
};

const result5 = addInfo({
  name: "John",
  age: 20,
  hasPet: false,
  petName: "John",
  asd: "Asd",
});
