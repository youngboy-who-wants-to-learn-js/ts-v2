type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;

type Num = Flatten<number>;

type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;

// infer example:

type GetReturnType<Type> = Type extends (...args: any[]) => infer Return
  ? Return
  : never;

type Num2 = GetReturnType<() => number>;

type Str2 = GetReturnType<(x: string) => string>;

// Distributive Conditional Types

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>; // => string[] | number[]
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never; // => (string | number)[]
