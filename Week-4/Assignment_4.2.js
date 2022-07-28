class Person {
  constructor(name) {
    this.name = name;
  }
  read() {
    console.log(`All person may not read, ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  teach() {
    console.log(`Hi, I am ${this.name} professor of ${this.subject}`);
  }
}
const person = new Person("Harsh");
const teacher = new Teacher("Abhishek", "Space Science");

teacher.read(); //Inheririting from Person
console.log(person);
teacher.teach();
