'use strict';

setTimeout(function() {
  console.log('a');
}, 300);

setTimeout(function() {
  console.log('b');
}, 1000);

setTimeout(function() {
  console.log('c');
}, 500);

function allDone() {
  console.log('all done');
}


// chaining callbacks
// setTimeout(function() {
//     console.log('first');
  
//     setTimeout(function() {
//         console.log('second');
        
//         setTimeout(function() {
//             console.log('third');
//         }, 750);
//     }, 500);
// }, 1000);




