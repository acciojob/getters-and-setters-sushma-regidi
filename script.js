// Define Person class
class Person {
  constructor(name, age) {
    this._name = name;
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

// Define Student class that extends Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Define Teacher class that extends Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// ✅ Expose classes to Cypress (global scope)
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


