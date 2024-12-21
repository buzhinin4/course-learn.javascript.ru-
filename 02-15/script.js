//1 exercise
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

//2 exercise
function min(a, b) {
  return a < b ? a : b;
}

//3 exercise
function pow(
  x = prompt("Введите число, которое будем возводить в степень"),
  n = prompt("Введите степень")
) {
  return n >= 1 && n >= 1 && n % 1 == 0
    ? alert(`Результат вычислений равен ${x ** n}`)
    : alert("Поддерживаются только натуральные числа");
}
pow();
