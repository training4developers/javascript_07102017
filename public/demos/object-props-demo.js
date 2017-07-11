const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 23,
};

person.city = 'Mountain View';
// delete person.city;

// dot notation
console.log(person.firstName);

// bracket notation

const propName = 'city';

const testObj = { prop: 'test' };

const testObj2 = { prop: 'test2' };

person[testObj] = 'Some Value';

console.log(person);
console.log(person[propName]);

console.log(testObj.toString());
console.log(testObj2.toString());

// goes up the prototype chain to check for the property on the parents
console.log(propName in person);
console.log('firstName' in person);
console.log('address' in person);

// does not go up the prototype chain
console.log(person.hasOwnProperty('firstName'))

// array of the object keys
console.log(Object.keys(person));


