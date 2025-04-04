//4 exercise

console.log("exercise 4");

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//5 exercise

console.log("exercise 5");

function askPasswordFifth(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let userFifth = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(
  userFifth.login.bind(userFifth, true),
  userFifth.login.bind(userFifth, false)
);
