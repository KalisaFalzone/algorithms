// run tsc --build tsconfig.json to check types

type matrixRowColType = Array<number | string>; //array of any length all elements are either a number or a string
type matrixTuple = [number, string]; // array of exactly two elements first is a number second is a string
type matrixType = Array<matrixRowColType>;