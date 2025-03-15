//1 exercise

console.log("exercise 1");

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

//2 exercise

console.log("exercise 2");

function topSalary(salaries) {
  return Object.entries(salaries).length == 0
    ? null
    : Object.entries(salaries).reduce(
        ([nameMaxSalary, maxSalary], [name, salary], i, arr) =>
          maxSalary > salary ? [nameMaxSalary, maxSalary] : [name, salary],
        Object.entries(salaries)[0]
      )[0];
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
