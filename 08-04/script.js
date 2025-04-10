//1 exercise

console.log("exercise 1");

let dictionary = Object.create(null);

dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
    enumerable: false,
  },
});

dictionary = Object.create(null, {});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
