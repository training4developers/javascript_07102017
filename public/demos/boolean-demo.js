
// falsy
// 0
// ''
// false
// undefined
// null
// NaN

// const p = { name: '', age: 0, friends: [] };

// if (p.friends) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }

//console.log(4 && 0);

function doIt(count) {
  const c = count || 5;
  console.log(c);
}

doIt(3);

let person = {
  fn: 'Bob'
};

person = null;

// console.log(person && person.fn);

const result = person && 'Person exists' || 'Person does not exist';

console.log(result);