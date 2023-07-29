const sum = (...par) => {
  let total = 0;
  for (let i = 0; i < par.length; i++) {
    total += par[i];
  }
  return total;
}


console.log(sum(0,1,2));
console.log(sum(1,2,3,4));
console.log(sum(5));
console.log(sum());
