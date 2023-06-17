const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log("glove box: " + gloveBoxContents);
console.log(myStorage.car.inside);
console.log(myStorage.car.outside.trunk);
