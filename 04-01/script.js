//1 exercise
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//3 exercise
let schedule = {};

let isEmpty = (object) => {
  for (const key in object) {
    return false;
  }
  return true;
};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

//4 exercise
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let culcSumObject = (object) => {
  let sum = 0;
  for (const key in object) {
    sum += object[key];
  }
  return sum;
};

alert(culcSumObject(salaries));

//5 exercise
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

let multiplyNumeric = (object) => {
  for (const key in object) {
    if (typeof object[key] === "number") {
      object[key] *= 2;
    }
  }
  return object;
};

alert(JSON.stringify(multiplyNumeric(menu), null, 2));
