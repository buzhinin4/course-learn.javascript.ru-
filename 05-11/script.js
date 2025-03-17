//1 exercise

console.log("exercise 1");

alert(new Date(2012, 1, 20, 3, 12));

//2 exercise

console.log("exercise 2");

function getWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      return "ВС";
    case 1:
      return "ПН";
    case 2:
      return "ВТ";
    case 3:
      return "СР";
    case 4:
      return "ЧТ";
    case 5:
      return "ПТ";
    case 6:
      return "СБ";
  }
}

let date = new Date(2012, 0, 3);
alert(getWeekDay(date));

//3 exercise

console.log("exercise 3");

function getLocalDay(date) {
  let days = [7, 1, 2, 3, 4, 5, 6];

  return days[date.getDay()];
}

date = new Date(2012, 0, 3); // 3 января 2012 года
alert(getLocalDay(date));

//4 exercise

console.log("exercise 4");

function getDateAgo(date, daysAgo) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - daysAgo);
  return dateCopy.getDate();
}

date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

//5 exercise

console.log("exercise 5");

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//6 exercise

console.log("exercise 6");

function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());

//7 exercise

console.log("exercise 7");

function getSecondsToTomorrow() {
  return 24 * 60 * 60 - getSecondsToday();
}

console.log(getSecondsToTomorrow());

//8 exercise

console.log("exercise 8");

function formatDate(date) {
  let dateNew = new Date();
  let dif = dateNew.getTime() - date.getTime();
  if (dif < 1000) {
    return `прямо сейчас`;
  } else if (dif < 60 * 1000) {
    return `${dateNew.getSeconds() - date.getSeconds()} сек. назад`;
  } else if (dif < 60 * 60 * 1000) {
    return `${dateNew.getMinutes() - date.getMinutes()} мин. назад`;
  } else {
    return date;
  }
}

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
