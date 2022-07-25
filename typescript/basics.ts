// Primitives: number, string, boolean
// More complex: arrays, objects
// Function types, parameters

// Primitives
let age: number = 31;

age = 12;

let userName: string;

userName = 'devin';

let isInstructor: boolean = true;

// Complex

let hobbies: string[] = [];

hobbies = ['sports'];

type Person = {
  name: string;
  age: number;
};

let devin: Person = {
  name: 'devin',
  age: 31,
};

let people: Person[] = [];

// Type inference

// Union type
let course: string | number = 'react complete guide';
course = 1234;

// Function types
const addNumber = (a: number, b: number) => {
  return a + b;
};

const printValue = (value) => {
  console.log(value);
};

// Generics

const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
