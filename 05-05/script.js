//1 exercise

console.log("exercise 1");

function camelize(str) {
  return str
    .split("-")
    .map((element, index) => {
      return index ? element[0].toUpperCase() + element.slice(1) : element;
    })
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//2 exercise

console.log("exercise 2");

function filterRange(arr, a, b) {
  return arr.filter((element) => a <= element && element <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)

//3 exercise

console.log("exercise 3");

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--)
    if (a > arr[i] || arr[i] > b) arr.splice(i, 1);
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]

//4 exercise

console.log("exercise 4");

arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10

//5 exercise

console.log("exercise 5");

arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort((a, b) => a.localeCompare(b));
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)

//6 exercise

console.log("exercise 6");

function Calculator() {
  (this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }),
    (this.addMethod = function (op, func) {
      this.methods[op] = func;
    });

  this.calculate = function (str) {
    args = str.split(" ");
    if (args.length != 3) return "err: Missed one of the components";

    a = +args[0];
    b = +args[2];
    if (!isFinite(a) || isNaN(a) || !isFinite(b) || isNaN(b))
      return "err: The numbers are introduced incorrectly";

    op = args[1];
    if (this.methods[op] === undefined)
      return "err: The introduced operator has a substantiated operator";

    return this.methods[op](a, b);
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

//7 exercise

console.log("exercise 7");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((element) => element["name"]);

console.log(names); // Вася, Петя, Маша

//8 exercise

console.log("exercise 8");

vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [vasya, petya, masha];

let usersMapped = users.map((element) => {
  return {
    fullName: `${element.name} ${element.surname}`,
    id: element.id,
  };
});

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

//9 exercise

console.log("exercise 9");

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

//10 exercise

console.log("exercise 10");

function shuffle(arr) {
  return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

//11 exercise

console.log("exercise 11");

function getAverageAge(arr) {
  return arr.reduce((sum, element) => (sum += element.age), 0) / arr.length;
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//12 exercise

console.log("exercise 12");

function unique(arr) {
  let uniq = [];
  arr.forEach((element) => {
    if (!uniq.includes(element)) uniq.push(element);
  });
  return uniq;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O

//13 exercise

console.log("exercise 13");

function groupById(users) {
  return users.reduce((data, user) => {
    data[user["id"]] = user;
    return data;
  }, {});
}

users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);
/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
