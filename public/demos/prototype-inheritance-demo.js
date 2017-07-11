
const parent = {
  n: 'parent',
  amt: 2000,
  address: {
    city: 'Mountain View',
    state: 'CA',
  }
};

const child = Object.create(parent);
child.n = 'child';

console.log( Object.getPrototypeOf(child) === parent ) // true;

// Object.setPrototypeOf(child, parent);

parent.amt = 3000;

console.log(child.amt);
console.log(parent.amt);

child.amt = 10;
console.log(child.amt);
console.log(child.address.city);

child.address = {
  city: 'Scranton',
  state: 'PA'
}

child.address.city = 'Paris';
console.log(parent.address.city);



console.log(child);
