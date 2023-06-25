function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (var a=0; a < arr.length; a++) {
      for (var b=0; b < arr[a].length; b++) {
        product = product * arr[a][b];
        // console.log(product);
        // console.log(arr[a][b]);   
      }
    }

    console.log(product);

    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1], [2], [3]])
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])
