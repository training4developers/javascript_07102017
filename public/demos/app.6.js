
const person = {
  firstName: 'Bob',
  lastName: 'Smith',
};

// Object.preventExtensions(person);
// console.log(Object.isExtensible(person));

// Object.seal(person);
// console.log(Object.isSealed(person));

person.age = 42;

Object.freeze(person);
console.log(Object.isFrozen(person));

// Object.defineProperty(person, 'firstName', {
//   configurable: true,
//   enumerable: true,
//   set: function() { },
//   get: function() { },
// });

// person.age = 42;

person.firstName = 'Jane';

console.log(person);
