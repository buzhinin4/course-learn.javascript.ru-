//1 exercise

console.log("exercise 1");

function work(a, b) {
  alert(a + b);
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert("call:" + args.join()); // "call:1,2", "call:4,5"
}

//2 exercise

console.log("exercise 2");

function f(x) {
  alert(x);
}

function delay(func, time) {
  return function () {
    return setTimeout(() => func.apply(this, arguments), time);
  };
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 м

//3 exercise

console.log("exercise 3");

function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

function handleInput(event) {
  console.log(event.target.value);
}

const debouncedInputHandler = debounce(handleInput, 1000);

const myInput = document.getElementById("my-input");
myInput.addEventListener("input", debouncedInputHandler);

//4 exercise

console.log("exercise 4");
