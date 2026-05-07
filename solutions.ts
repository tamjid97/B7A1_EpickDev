// Problem 1:------------------------------------------------------------

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
if (evenNumbers.length > 0) {
  console.log(evenNumbers);
}

// Problem 2:------------------------------------------------------------

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
const reversed = reverseString("typescript");
console.log(reversed);

// Problem 3:------------------------------------------------------------

type checkType = string | number;
const getCheckType = (type: checkType) => {
  if (typeof type === "string") {
    return "String";
  } else if (typeof type === "number") {
    return "Number";
  }
};
const checkedTypeValue = 42;
console.log(getCheckType(checkedTypeValue));

// Problem 4:------------------------------------------------------------

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getProperty(user, "name"));

// Problem 5:------------------------------------------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return { ...book, isRead: true };
};
const result5 = toggleReadStatus(myBook);

console.log(result5);

// Problem 6:------------------------------------------------

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return (
      "Name: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade
    );
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// Problem 6:------------------------------------------------

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}
const intersection = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6]);
console.log(intersection);
