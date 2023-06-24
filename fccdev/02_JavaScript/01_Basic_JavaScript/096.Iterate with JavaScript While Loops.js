// Setup
const myArray = [];

// Only change code below this line

let index = 0;
while (index < 5) {
    myArray.push(5 - index);
    index++;
}

console.log(myArray);

index = 0;
while (index < 5) {
    console.log(index+1 + '> ' + myArray[index]);
    index++;
}
