'use strict';

class Person {

  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  delayedFullName() {
    console.log(this.fn + ' ' + this.ln);

    const myFn = function() {
      console.log(this.fn + ' ' + this.ln);
    };

    const fn = myFn.bind(this);

    setTimeout(fn, 2000);

    setTimeout((function() {
      console.log(this.fn + ' ' + this.ln);
    }).bind(this), 3000);

    setTimeout(() => {
      console.log(this.fn + ' ' + this.ln);
    }, 4000);    
  }
}

const p = new Person('Bob','Smith');
p.delayedFullName();


