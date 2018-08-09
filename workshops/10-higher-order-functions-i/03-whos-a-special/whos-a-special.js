// YOUR CODE BELOW

function whosASpecial(petsArray) {
    var returnString = "";
    petsArray.forEach( function({name, species}, idx) {
        returnString += `${name} the ${species} is very special!`;

        if (idx != petsArray.length -1) {
            returnString += " ";
        }
    })

    return returnString;
}

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

console.log(whosASpecial(specialPets));