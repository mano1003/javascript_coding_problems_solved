// Javascript Closures - 
// A function that remembers its lexical scope even when executed outside of it.
const increment = outer();
function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
 
  increment(); // 1
  increment(); // 2


console.log(x); // undefined
var x = 5;
/*
4.	Event Bubbling and Capturing
•	Bubbling: Events propagate from the target element up to the root.
•	Capturing: Events propagate from the root down to the target.
•	Example:
*/


function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  return `Hello, ${this.name}`;
};
const p1 = new Person("Alice");
console.log(p1.sayHello()); // "Hello, Alice"
