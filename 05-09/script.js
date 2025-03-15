//1 exercise

console.log("exercise 1");

function sumSalaries(object) {
  let salaries = 0;
  for (let salary of Object.values(object)) {
    salaries += salary;
  }
  return salaries;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

//2 exercise

console.log("exercise 2");

function count(object) {
  return Object.entries(object).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user)); // 2
