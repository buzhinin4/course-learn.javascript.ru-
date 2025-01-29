//2 exercise
let calculator = {
  a: null,
  b: null,
  read() {
    do {
      this.a = Number(prompt("Enter the first number "));
    } while (typeof this.a != "number");
    do {
      this.b = Number(prompt("Enter the second number"));
    } while (typeof this.b != "number");
  },
  sum() {
    return `sum ${this.a + this.b}`;
  },
  mul() {
    return `mul ${this.a * this.b}`;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//3 exercise
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
