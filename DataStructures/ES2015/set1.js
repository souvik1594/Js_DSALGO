//Class
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.absence = 0;
    this.score = [];
  }
  fullname() {
    return `The Name is  :${this.firstName}`;
  }
  absence() {
    this.absence++;
    return `this student ${this.firstName} was late ${this.absence}`;
  }

  addScore(num) {
    this.score.push(num);
  }

  calculate() {
    let sum = this.score.reduce((a, b) => {
      return a + b;
    });
    return sum / this.score.length;
  }

  static enroll(...students) {}
}

let firstStudent = new Student("Souvik", "Kolay");
console.log(firstStudent.fullname());
