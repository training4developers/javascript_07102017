'use strict';

var t;
console.log(typeof t);

t = 23;
console.log(typeof t);

t = 'Intuit Rocks';
console.log(typeof t);

t = true;
console.log(typeof t);

t = Symbol('some symbol');
console.log(typeof t);

t = {
  fn: 'Bob',
  ln: 'Smith',
};
console.log(typeof t);

t = [1,2,3];
console.log(typeof t);

t = function() { console.log('did it'); };
t.someProp = "Hello World";
console.log(t.someProp);
console.log(typeof t);
