function sum(arr, n) {
  // Only change code below this line
  if (arr[0] == 1) {
    return 0;
  } else {
    return sum(arr, n - 1) * arr[ n - 1];
  }
  // Only change code above this line
}

console.log('sum([1], 0):: ' + sum([1], 0) );
console.log('sum([2, 3, 4], 1):: ' + sum([2, 3, 4], 1) ); 
