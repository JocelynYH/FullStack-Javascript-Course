// YOUR CODE BELOW
function cloneMachine(animalObj) {
    var clone = JSON.parse(JSON.stringify(animalObj));
    clone.name = clone.name + "Clone";
    animalObj.offspring.push(clone.name);
    return clone;
}

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }

cloneMachine(dolly);