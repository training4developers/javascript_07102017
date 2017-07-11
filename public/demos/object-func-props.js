
const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 23,
  address: {
    street: '123 Oak Lane',
    city: 'Sunnyvale',
    country: 'CA',
  },
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Smith',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
}

person2.address = person.address;

console.log(person.getFullName());
console.log(person2.getFullName());
console.log(person.address.city);

console.log(person.getFullName === person2.getFullName);


