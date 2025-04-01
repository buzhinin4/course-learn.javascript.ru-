//1 exercise

console.log("exercise 1");

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function (value) {
    count = value;
  };

  counter.decrease = function () {
    count--;
  };

  return counter;
}

let count = makeCounter();

console.log(count());

count.set(5);
console.log(count());

count.decrease();
count.decrease();
count.decrease();
console.log(count());

//2 exercise

console.log("exercise 2");

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

console.log(String(sum(1)(2))); //== 3;
console.log(String(sum(1)(2)(3))); //== 6;
console.log(String(sum(5)(-1)(2))); //== 6
console.log(String(sum(6)(-1)(-2)(-3))); //== 0
console.log(String(sum(0)(1)(2)(3)(4)(5))); //== 15
