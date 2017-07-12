'use strict';

// $('div') // select all divs from the DOM
// $('<div>') // create a DOM object
// $(someDivObject) // return a jQuery wrapped DOM object
// $(function() {
//   // run on on document.ready, DOM Content Loaded event
// });

// rest operator - left hand side of the assignment
const doIt = (a = 1, b, ...c) => {
  console.log('did it');
  console.log(a,b,c);
  console.log(arguments); // do not use
  // console.log(Array.isArray(arguments));
  // console.log(arguments instanceof Array);
}

doIt();

// spread operator - right hand side of assignment
doIt(...[1,2,3,4]);



