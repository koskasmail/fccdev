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

    if (value === "") {
        delete records[id][properties];
    } else {
        /////  if ( (properties !== 'tracks') {}
        if ((properties !== 'tracks')) {
            records[id][properties] = value;
        } else {
            if (records[id].hasOwnProperty('tracks') === true) {
                records[id].tracks.push(value);
            }
            else { //false
                records[id].tracks = [];
                records[id].tracks.push(value);
            }

        }
    }
    return records;
}

console.table(recordCollection);
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.table(recordCollection);

updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
console.table(recordCollection);

updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love')
console.table(recordCollection);

