// index signature

interface StringArray {
  [index: number]: string;
}

const getStringArray = () => ["a", "b"];

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

// Excess Property Checks
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// extends

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

// Intersection Types

interface IColorful {
  color: string;
}
interface ICircle {
  radius: number;
}

type IntersectionColorfulCircle = IColorful & ICircle;

const test: IntersectionColorfulCircle = {
  color: "red",
  radius: 32,
};

// generic object types
interface IBox<T> {
  contents: T;
}

type Box<Type> = {
  contents: Type;
};

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

// ReadonlyArray
const readonlyArr: ReadonlyArray<number> = [1, 2];

// Tuple Types

type Either2dOr3d = [number, number, number?];
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
