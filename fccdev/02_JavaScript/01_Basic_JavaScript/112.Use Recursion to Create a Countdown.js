// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  }
  else {
    const countdownArray = countdown(n - 1);
    countdownArray.unshift(n);
    return countdownArray;
  }
}

console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(12));
// Only change code above this line
