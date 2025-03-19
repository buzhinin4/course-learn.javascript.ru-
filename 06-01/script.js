//1 exercise

console.log("exercise 1");

function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumToRecursion(n - 1);
  }
}

function sumToFormula(n) {
  return (n * (1 + n)) / 2;
}

console.log(sumToLoop(100)); // 5050
console.log(sumToRecursion(100)); // 5050
console.log(sumToFormula(100)); // 5050

//2 exercise

console.log("exercise 2");

function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120

//3 exercise

console.log("exercise 3");

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(10)); // 55

//4 exercise

console.log("exercise 4");

function printListLoop(list) {
  let listPart = list;

  while (listPart) {
    console.log(listPart.value);
    listPart = listPart.next;
  }
}

function printListRecursion(list) {
  if (list.next == null) {
    console.log(list.value);
  } else {
    console.log(list.value);
    printListRecursion(list.next);
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printListLoop(list);
printListRecursion(list);

//5 exercise

console.log("exercise 5");

function printReverseListLoop(list) {
  let listValues = [];
  let listPart = list;

  while (listPart) {
    listValues.push(listPart.value);
    listPart = listPart.next;
  }

  while (listValues.length) {
    console.log(listValues.pop());
  }
}

function printReverseListRecursion(list) {
  if (list.next == null) {
    console.log(list.value);
  } else {
    printReverseListRecursion(list.next);
    console.log(list.value);
  }
}

printReverseListLoop(list);
printReverseListRecursion(list);
