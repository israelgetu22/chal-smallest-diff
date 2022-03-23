function smallNumber() {
  arrOne = [10, 20, 14, 16, 18];
  arrTwo = [30, 23, 54, 33, 96];
  let small = arrOne[0];

  for (i = 0; i < arrOne.length; i++) {
    for (j = 0; arrTwo.length; i++) {
      if (arrOne[i] > arrTwo[j]) {
        small = arrOne[i];
        arrOne[i] = arrTwo[j];
        arrTwo[j] = small;
      }
      smallNumber;
    }
  }
  return smallNumber;
}

console.log(smallNumber);
