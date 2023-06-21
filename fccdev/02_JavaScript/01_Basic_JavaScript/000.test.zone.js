// 095.Record Collection.js

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, properties, value) {


    if ( (properties !== "tracks") && (value !== "") ) {
        records[id][properties] = value;
    } 
    else if ((properties === "tracks") && (records[id].hasOwnProperty("tracks") === false) ) {
        records[id][properties] = value;
    }
    else if (properties === "tracks" && value !== "") {
            records[id][properties] = value;
    } 
    else if (value === "") {
        delete records[id][properties];
    }


    return records;
  }
  
  console.table(recordCollection);
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.table(recordCollection);

  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  console.table(recordCollection);

  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
  console.table(recordCollection);
