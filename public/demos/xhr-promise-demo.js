'use strict';

getMyCurrentPosition().then(position => console.log(position));

const ajax = (options) => {

  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    });
    xhr.open(options.method, options.url);
    xhr.send();
  });

}

ajax({
  method:'GET',
  url: 'http://localhost:3010/cars',
}).then(results => console.log(results));
