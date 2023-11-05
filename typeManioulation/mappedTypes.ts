type OptionsFlags<Type> = {
  [Prop in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureFlags = OptionsFlags<Features>;

// Removes 'readonly' attributes from a type's properties

type CreateMutable<Type> = {
  -readonly [Prop in keyof Type]: Type[Prop];
};

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type NewKeyType = string | number | symbol;

type MappedTypeWithNewProperties<Type> = {
  [Prop in keyof Type as NewKeyType]: Type[Prop];
};

type Getters<Type> = {
  [Prop in keyof Type as `get${Capitalize<string & Prop>}`]: () => Type[Prop];
};

type RemoveKindField<Type> = {
  [Prop in keyof Type as Exclude<Prop, "kind">]: Type[Prop];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
