function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  else {
    var arrCount = rangeOfNumbers(startNum, endNum-1);
    arrCount.push(endNum);
    return arrCount;
  }
};

console.log(rangeOfNumbers(1, 5) );
console.log(rangeOfNumbers(6, 9) );
console.log(rangeOfNumbers(4, 4) );
