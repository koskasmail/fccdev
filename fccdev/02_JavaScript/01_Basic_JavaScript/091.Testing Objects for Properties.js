function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty (checkProp) ) {
       console.log(obj[checkProp] + ' ==> ' + obj.hasOwnProperty(checkProp));
      return obj[checkProp];
    }
    else {
        console.log(obj[checkProp] + ' ==> Not Found');
        return "Not Found";
    }
    // Only change code above this line
  }
  
  checkObj({ gift: 'pony', pet: 'kitten', 'bed':'sleigh' }, 'gift');
  checkObj({ gift: 'pony', pet: 'kitten', 'bed':'sleigh' }, 'set');
  checkObj({ gift: 'pony', pet: 'kitten', 'bed':'sleigh' }, 'pet');
  checkObj({city: 'Seattle'}, 'city');
