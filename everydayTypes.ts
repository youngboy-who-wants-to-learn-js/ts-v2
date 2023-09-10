// Differences Between Type Aliases and Interfaces

// Extending an interface
interface IAnimal {
  name: string;
}

interface IBear extends IAnimal {
  honey: boolean;
}

const getBearInterface = (): IBear => {
  return {
    name: "test",
    honey: true,
  };
};

const testBear = getBearInterface();
testBear.name;
testBear.honey;

// Extending a type via intersections

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const getBear = (): Bear => {
  return {
    name: "test",
    honey: true,
  };
};

const bear = getBear();
bear.name;
bear.honey;

// Adding new fields to an existing interface

interface Dog {
  paws: number;
}

interface Dog {
  ears: number;
}

const dog: Dog = {
  paws: 4,
  ears: 4,
};

// A type cannot be changed after being created

type Cat = {
  tail: boolean;
};

//! Duplicate identifier 'Cat'.
// type Cat = {
//   eyes: number;
// }
