'use strict';

// export const createFamousPerson = (fn, ln) => {
//   return new Person(fn, ln);
// };

export default class Person {

  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  getFullName() {
    return this.fn + ' ' + this.ln;
  }

}