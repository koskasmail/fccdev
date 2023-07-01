// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
      for (var i = 0; i < contacts.length; i++) {
          if (contacts[i]['firstName'] === name) {
              if (contacts[i].hasOwnProperty(prop)) {
                  return contacts[i][prop];
              }
              else {
                  return "No such property";
              }
          }
      }
      return "No such contact";
    // Only change code above this line
  }
  
  console.log("Akira, likes:: " + lookUpProfile("Akira", "likes"));
  console.log("Kristian,lastName:: " + lookUpProfile("Kristian", "lastName"));
  console.log("Sherlock, likes:: " + lookUpProfile("Sherlock", "likes"));
  console.log("Harry, likes:: " + lookUpProfile("Harry", "likes"));
  console.log("Bob, number:: " + lookUpProfile("Bob", "number"));
  console.log("Bob, potato:: " + lookUpProfile("Bob", "potato") );
  console.log("Akira, address:: " + lookUpProfile("Akira", "address") );
  
  
