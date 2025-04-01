//1 exercise

console.log("exercise 1");

function printNumbersInterval(from, to) {
  let s = from;
  let print = setInterval(
    () => (s <= to ? console.log(s++) : clearInterval(print)),
    1000
  );
}

function printNumbersTimeout(from, to) {
  let s = from;
  setTimeout(function t() {
    if (s <= to) {
      console.log(s++);
      setTimeout(t, 1000);
    }
  }, 1000);
}

printNumbersInterval(1, 10);

printNumbersTimeout(10, 20);
