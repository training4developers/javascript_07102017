
const firstName = 'Bob';

const person = {
  firstName, // shorthand property

  getFullName() {
    return this.firstName;
  },

  set age(value) { this._age = value; },
  get age() { return this._age; },
};

person.age = 42;
console.log(person._age);

console.log(person.firstName);
console.log(person.getFullName());
console.log(person.age);


// Object.defineProperty(person, 'firstName', {
//   configurable: true,
//   enumerable: true,
//   value: 'Bob',
//   writable: true,
// });

// Object.defineProperty(person, 'firstName', {
//   configurable: false,
//   enumerable: true,
//   get: function() {
//     console.log('get firstname');
//     return this._firstName;
//   },
//   set: function(value) {
//     console.log('set firstname');
//     this._firstName = value;
//   }
// });

// person.firstName = 'Bob';
// console.log(person.firstName);
