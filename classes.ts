class Point {
  x: number;
  y: number;
  // x = 0;
  // y = 0;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

// --strictPropertyInitialization - setting controls whether class fields need to be initialized in the constructor.

// Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.

class Greeter {
  readonly name: string = "William";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  // err() {
  // this.name = "not ok";
  // Cannot assign to 'name' because it is a read-only property.
  // }
}

const g = new Greeter();
// g.name = "also not ok";

// overloads

// class Point {
//   // Overloads
//   constructor(x: number, y: string);
//   constructor(s: string);
//   constructor(xs: any, y?: any) {
//     // TBD
//   }
// }

class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}

// Index Signatures

class MyClassWithIndexSignatures {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

// implements class C implements A, B {

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log("ping!");
  }
}

// class Ball implements Pingable {
// Class 'Ball' incorrectly implements interface 'Pingable'.
//   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }

//! Type-only Field Declarations

interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}

//! Member Visibility
// protected members are only visible to subclasses of the class they’re declared in.

class Greeter2 {
  public greet() {
    console.log("Hello, " + this.getName());
  }

  protected getName() {
    return "hi!";
  }
}

class SpecialGreeter2 extends Greeter2 {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}

const g2 = new SpecialGreeter2();
g2.greet(); // OK
// g2.getName(); // Error

/*
Exposure of protected members

class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK

*/

//! private
// private is like protected, but doesn’t allow access to the member even from subclasses:

class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
// console.log(b.x);

/*
class MySafe {
  private secretKey = 12345;
}
 
const s = new MySafe();
 
// Not allowed during type checking
console.log(s.secretKey);
Property 'secretKey' is private and only accessible within class 'MySafe'.
 
// OK
console.log(s["secretKey"]);
*/

// Static Members

class MyClassWithStaticMembers {
  static x = 0;
  static printX() {
    console.log(MyClassWithStaticMembers.x);
  }
}
console.log(MyClassWithStaticMembers.x);
MyClassWithStaticMembers.printX();

// Generic classes

/*
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b = new Box("hello!");
// string
*/

// this-based type guards

/*
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  children: FileSystemObject[];
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content;
  
const fso: FileRep
} else if (fso.isDirectory()) {
  fso.children;
  
const fso: Directory
} else if (fso.isNetworked()) {
  fso.host;
  
const fso: Networked & FileSystemObject
}
*/

// popular case

class Box<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const box = new Box();
box.value = "Gameboy";

box.value;

// (property) Box<unknown>.value?: unknown

if (box.hasValue()) {
  box.value;

  // (property) value: unknown
}

// Parameter Properties

class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);

// (property) Params.x: number
console.log(a.z);

// Class expressions

const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass("Hello, world");

// Constructor Signatures

class PointConstructorSignatures {
  createdAt: number;
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.createdAt = Date.now();
    this.x = x;
    this.y = y;
  }
}
type PointInstance = InstanceType<typeof PointConstructorSignatures>;

function moveRight(point: PointInstance) {
  point.x += 5;
}

const point = new PointConstructorSignatures(3, 4);
moveRight(point);
point.x; // => 8

// abstract

abstract class BaseAbstract {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

const bb = new BaseAbstract();

class Derived extends BaseAbstract {
  getName() {
    return "world";
  }
}

const dd = new Derived();
dd.printName();

function greet(ctor: new () => BaseAbstract) {
  const instance = new ctor();
  instance.printName();
}

greet(Derived);
greet(BaseAbstract);

{
  // Relationships Between Classes
  class Point1 {
    x = 0;
    y = 0;
  }

  class Point2 {
    x = 0;
    y = 0;
  }

  // OK
  const p: Point1 = new Point2();
}
