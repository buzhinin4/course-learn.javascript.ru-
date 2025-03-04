//2 exercise

let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Реп", "Регги");
console.log(styles);

//4 exercise

function sumInput() {
  let arr = [];
  let sum = 0;

  while (true) {
    let i = prompt("Введите число для нахождения суммы");
    console.log(i);
    if (isNaN(+i) || i == null || !isFinite(+i) || i.trim() == "") {
      break;
    }
    arr.push(+i);
  }

  for (i of arr) {
    sum += i;
  }

  alert(sum);
}

sumInput();

//5 exercise

function getMaxSubSum(arr) {
  let maxSubSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSubSum = Math.max(maxSubSum, sum);
    }
  }

  return maxSubSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
