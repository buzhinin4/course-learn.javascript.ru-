let enterNumber;
firstFor: for (let i = 2; i <= enterNumber; i++) {
  for (let j = 2; j < enterNumber; j++) {
    if (i % j == 0) {
      continue firstFor;
    }
  }
  alert(i);
}
