//1 exercise

let ucFirst = function (str) {
  return str ? str[0].toUpperCase() + str.slice(1) : undefined;
};

alert(ucFirst("вася") == "Вася");

//2 exercise

let checkSpam = function (str) {
  return (
    str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX")
  );
};

alert(`${checkSpam("buy ViAgRA now") == true}
${checkSpam("free xxxxx") == true}
${checkSpam("innocent rabbit") == false}`);

//3 exercise

let truncate = function (str, maxlength) {
  return str.length < maxlength ? str : str.slice(0, maxlength + 1) + "...";
};

alert(`${truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)}
${truncate("Всем привет!", 20)}`);

//4 exercise

let extractCurrencyValue = function (str) {
  return str ? +str.slice(1) : undefined;
};

alert(extractCurrencyValue("$120") === 120); // true
