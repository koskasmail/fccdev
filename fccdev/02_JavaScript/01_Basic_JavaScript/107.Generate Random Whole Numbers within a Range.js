function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin );
}

console.log(randomRange(1,5));
console.log(randomRange(1,15));
console.log(randomRange(1,25));
console.log(randomRange(1,35));
