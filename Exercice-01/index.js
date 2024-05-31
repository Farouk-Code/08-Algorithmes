function pairNumbers(min, max) {
  let evenNumbers = [];

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers.join(",");
}

console.log(pairNumbers(0, 10));
