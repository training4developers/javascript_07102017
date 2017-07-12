'use strict';

const nums = [1,2,3,4,5];

// const first = nums.slice(0,1);
// const leftOver = nums.slice(1);

const [ first, ...leftOver ] = nums;

const newNums = nums.slice(0,2).concat(9).concat(nums.slice(3));
console.log(newNums);

const newNums2 = [ ...nums.slice(0,2), 9, ...nums.slice(3) ];
console.log(newNums2);

throw Error('some error occurred');

// console.log(first);
// console.log(second);
// console.log(leftOver);