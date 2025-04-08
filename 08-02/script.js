//2 exercise

console.log("exercise 2");

function Obj(title) {
  this.title = title;
}

let obj = new Obj("title");
let obj2 = new obj.constructor("title2");

Obj.prototype = {};

let obj3 = new Obj("title3");
let obj4 = new obj3.constructor("title3");

console.log(obj2.title);

console.log(obj4.title);
