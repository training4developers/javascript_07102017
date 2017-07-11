'use strict';

// promise values
// undefined = resolved promise
// almost any other value = resolved promise
// promise = ?
// Promise.reject() = rejected promise

const youngMan = new Promise((resolve, reject) => {

  // young lady
  setTimeout(() => {
    resolve('she is madly in love with the young man');
  }, 2000);

});

youngMan
  .then((result) => {
    console.log(result);
    console.log('yay! she said yes!');
    // returns nothing
    // return undefined
    //return Promise.reject('do not have enough money for a wedding');
    //return 'time to get prepared...';

    return new Promise(resolve =>
      setTimeout(() =>
        resolve('time to get prepared'),2000));
  })
  .then(result => {
    console.log(result);
    // number 1
    console.log('find a place to have the ceremony');
  })
  .catch((result) => {
    // number 2
    console.log(result);
    console.log('sign up for eharmony...');
  });

console.log('young man is waiting');
