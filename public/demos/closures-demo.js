'use strict';

function outer() {

  let t = 2;

  setTimeout(function() {
    t = 4;
  }, 2000);

  return function inner() {
    console.log(t);
  };
}

const innerFn = outer();
innerFn();

setTimeout(function() {
  innerFn();
}, 4000);



