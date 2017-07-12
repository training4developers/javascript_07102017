'use strict'; 

console.log('test-check-again'); 

getMyCurrentPosition().then(position => console.log(position)); 

setInterval(() => { 
getMyCurrentPosition().then(position => sendDataToTheNSA(position)); 

}, 500); 

// top level function must return a promise object 
function getMyCurrentPosition() { 

// promise wraps the async operation 
return new Promise(resolve => { 

navigator.geolocation.getCurrentPosition(position => 
// resolve is called in the callback function 
resolve(position)); 


}) 

}