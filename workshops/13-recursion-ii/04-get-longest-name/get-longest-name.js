// YOUR CODE BELOW
function getLongestName(obj){

    var longestName = "";

    for (name in obj) {
        if (name.length > longestName.length) longestName = name;
    }

    if (obj[name]) {
        let descendent = getLongestName(obj[name]);
        if (descendent.length > longestName.length) {
            longestName = descendent;
        }
    }

    return longestName;
}

let family = {
    'Beverly Marquez': {
      'Nina Rhone': {
        'William Rhodes': null,
        'Paul Nell': null,
        'Sir Paddington the Fourth, of the county Wilstonshire': null
      }
    }
  };
  
var result = getLongestName(family);

console.log(result);