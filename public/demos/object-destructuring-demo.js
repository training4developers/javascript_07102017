'use strict';

const p = {
  firstName: 'Bob',
  lastName: 'Smith',
  address: {
    street: '123 Oak Lane',
    city: 'Mountain View',
    state: 'CA',
  }
};

let firstName = 'Bing';

const { firstName: fn, lastName, address: { city, state } } = p;

console.log(fn);
console.log(lastName);
console.log(city, state);

function getFullName({ firstName, lastName }) {
  return firstName + ' ' + lastName;
}

console.log(getFullName(p));