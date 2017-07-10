
const person = {
  fn: 'Bob',
  ln: 'Smith',
};

let person2 = person;

Object.freeze(person);

person2.fn = 'Jane';

// console.log(person2.fn);

// person2 = { }

console.log(person);
console.log(person2);
