'use strict';

// const ajax = (options) => {

//   return new Promise(resolve => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener('readystatechange', () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText));
//       }
//     });
//     xhr.open(options.method, options.url);
//     xhr.send();
//   });

// }


// // ES2017 feature async/await 
const getCars = async () => {

  const cars = await ajax({
    method:'GET',
    url: 'http://localhost:3010/cars',
  });

  console.log('debug cars', cars);

  return cars;

};

getCars().then(results => console.log(results));

function* numGen() {

  console.log('a');
  yield 1;

  console.log('b');
  yield 2;

  console.log('c');
  yield 3;

}

let counter = 1000;

for (let num of numGen()) {
  console.log(counter++);
  console.log(num);
}

console.log('all done');
