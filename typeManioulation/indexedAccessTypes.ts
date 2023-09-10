type Person = { age: number; name: string; alive: boolean };

type Age = Person["age"];

type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

// type Person = (typeof MyArray)[number];

// type Person = {
//   name: string;
//   age: number;
// };
// type Age = (typeof MyArray)[number]["age"];

// type Age = number;
// // Or
// type Age2 = Person["age"];
