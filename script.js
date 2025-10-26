// Base class: Person
class Person {
  constructor(name, age) {
    this._name = name;  // using underscore to indicate private-like property
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Subclass: Student
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// --- Example usage ---
// Uncomment to test in browser console or Node.js

// const person = new Person("John", 25);
// console.log(person.name); // Output: John
// person.age = 30;
// console.log(person.age);  // Output: 30

// const student = new Student("Alice", 22);
// student.study();          // Output: Alice is studying

// const teacher = new Teacher("Bob", 40);
// teacher.teach();          // Output: Bob is teaching

