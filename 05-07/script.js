//1 exercise

console.log("exercise 1");

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O

//2 exercise

console.log("exercise 2");

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let wordKey = word.toLowerCase().split("").sort().join("");
    map.set(wordKey, word);
  }

  return Array.from(map.values());
}

arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

//3 exercise

console.log("exercise 3");

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let wordKey = word.toLowerCase().split("").sort().join("");
    map.set(wordKey, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
