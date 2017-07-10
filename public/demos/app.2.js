
const nums = [1,2,3,4,5];

console.log(typeof nums);
console.log(nums instanceof Array);
console.log(Array.isArray(nums));
console.log(nums.length);

// all of these mutate the array
// nums.push(6);
// nums.pop();
// nums.unshift(0);
// nums.shift();
// nums.splice(2,1,9);
// nums.sort();

let newNums = nums.concat(6);
newNums = newNums.slice(0, newNums.length - 1);
newNums = [0].concat(newNums);
newNums = newNums.slice(1);
newNums = newNums.slice(0,2).concat(9).concat(newNums.slice(3));
newNums = newNums.concat().sort();

console.log(nums);
console.log(newNums);
console.log(nums === newNums);

console.log( newNums.filter( n => n > 2 ) );
console.log( newNums.map( n => n * 2 ) );
console.log( newNums.reduce( (prev, current) => prev + current ));
console.log( newNums.findIndex( n => n === 4) );

newNums.forEach( n => console.log(n) );









// const nums = [1,'2',true,{name: 'test'}, [1,2,3], function() { }, Symbol()];

// nums.anotherProp = 'here is another property';

// nums[30000] = 'big array?';

// console.log(nums['2']);

// console.log(nums);