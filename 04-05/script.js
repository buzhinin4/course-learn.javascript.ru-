//2 exercise
function Calculator() {
  (this.a = null),
    (this.b = null),
    (this.read = function () {
      do {
        this.a = Number(prompt("Enter the first number "));
      } while (typeof this.a != "number");
      do {
        this.b = Number(prompt("Enter the second number"));
      } while (typeof this.b != "number");
    }),
    (this.sum = function () {
      return this.a + this.b;
    }),
    (this.mul = function () {
      return this.a * this.b;
    });
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//3 exercise
function Accumulator(startingValue) {
  this.startingValue;
  this.value = startingValue;
  this.read = function () {
    do {
      this.value += Number(prompt("Enter number"));
    } while (typeof this.value != "number");
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
