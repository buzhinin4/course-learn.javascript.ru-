//6 exercise

console.log("exercise 6");

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); //= 3
console.log(sum(5)(-1)); // = 4

//8 exercise

console.log("exercise 8");

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(a) {
  return function (x) {
    return a.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//9 exercise

console.log("exercise 9");

function byField(str) {
  return function (a, b) {
    switch (str) {
      case "name":
        return a.name > b.name ? 1 : -1;
      case "age":
        return a.age > b.age ? 1 : -1;
      default:
        return console.err("Err: undefined key");
    }
  };
}

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
];

users.sort(byField("name"));

console.log(JSON.stringify(users));

users.sort(byField("age"));

console.log(JSON.stringify(users));
