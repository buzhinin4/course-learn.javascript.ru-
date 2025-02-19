//2 exercise
let readNumber = function (str) {
  let a;
  do {
    a = prompt(str);
  } while (a != null && (isNaN(+a) || !isFinite(+a) || +a == ""));
  return a ? +a : null;
};

readNumber("Введите число");

//4 exercise

let random = (min, max) => {
  return min + Math.random() * (max - min);
};

rand = random(
  readNumber("Введите минимальное значени"),
  readNumber("Введите максимальное значение")
);

alert(rand);
//5 exercise

function randomInteger(min, max) {
  return Math.ceil(random(min, max));
}

randInt = randomInteger(
  readNumber("Введите минимальное значени"),
  readNumber("Введите максимальное значение")
);

alert(randInt);
