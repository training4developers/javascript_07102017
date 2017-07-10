

function Person(fn, ln) {
  this.fn = fn;
  this.ln = ln;
}

Person.prototype.getFullName = function() {
  return this.fn + ' ' + this.ln;
};

function Student(studentId, fn, ln) {
  this._super(fn, ln); // super constructor
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getRecordInfo = function() {
  return this.studentId + ' ' + this.ln + ', ' + this.fn;
};

const s = new Student(1, 'Bob', 'Smith');
console.log(s.getFullName());
console.log(s.getRecordInfo());
// console.log(Object.getPrototypeOf(p) === Person.prototype);
console.log(s);


class Person2 {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  getFullName() {
    return this.fn + ' ' + this.ln;
  }
}

class Student2 extends Person2 {

  constructor(studentId, fn, ln) {
    super(fn, ln);
    this.studentId = studentId;
  }
  
  getRecordInfo() {
    return this.studentId + ' ' + this.ln + ', ' + this.fn;
  }
}

const s2 = new Student2(2, 'Jane', 'Smith');
console.log(s2.getFullName());
console.log(s2.getRecordInfo());
// console.log(Object.getPrototypeOf(p2) === Person.prototype);

console.log(s2);