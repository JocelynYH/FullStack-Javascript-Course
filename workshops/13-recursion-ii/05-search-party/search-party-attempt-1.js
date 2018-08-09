// YOUR CODE BELOW
function searchParty(name, world) {
    var locations = Object.keys(world);

    if (Object.values(world).indexOf(name) > -1) {
        var personLocation = locations[Object.values(world).indexOf(name)];
        return [personLocation];
    }

    

    for (locations in world) {
        var returnArray = [];
        if (typeof world[locations] === 'object') {
            var result = searchParty(name, world[locations]);
            
            var stringPath = locations + "," + result;
            stringPath = stringPath.split(",");
            return stringPath;
        }

        if (Array.isArray(world[locations])) {
            if (world[locations].indexOf(name) > -1) return locations;
        }

    }

    return null;
    
}

let world = {
    'Fullstack': {
      '11th floor': 'Marge',
      '25th floor': 'Francis'
    },
    'Subway': ['Jackie', 'Grumio']
  };

var result = searchParty('Grumio', world); 
console.log(result);