type PersonType = {
  name: string;
  age: number;
  hasPet: boolean;
  petName?: string;
};

type newType = "name" | "age" | "hasPet" | "petName";

type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "age";

const b: newTypeUsingKeyOf = "age";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}
