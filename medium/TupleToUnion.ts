type Arr = ['1', '2', '3']

type TupleToUnion<T extends Readonly<any []>> = T[number] extends never ? never : T[number];

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'