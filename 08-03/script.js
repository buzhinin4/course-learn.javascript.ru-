//1 exercise

console.log("exercise 1");

Function.prototype.defer1 = function (ms) {
  setTimeout(this, ms);
};

function f1() {
  alert("Hello!");
}

f1.defer1(1000); // выведет "Hello!" через 1 секунду

//2 exercise

console.log("exercise 2");

Function.prototype.defer = function (ms) {
  let fun = this;
  return function (...args) {
    setTimeout(() => fun.apply(this, args), ms);
  };
};

function f2(a, b) {
  alert(a + b);
}

f2.defer(1000)(1, 2); // выведет 3 через 1 секунду.
