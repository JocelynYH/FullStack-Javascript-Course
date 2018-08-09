// YOUR CODE BELOW
// function zooInventory(arr) {
//     newArr =[]
//     for (i=0; i <arr.length; i++) {
//         newArr[i] = `${arr[i][0]} the ${arr[i][1][0]} is ${arr[i][1][1]}.`;
//     }
//     return newArr;
// }

function zooInventory(animalArray) {
    newArray = [];
    for (i=0; i < animalArray.length; i++) {
        var [currentAnimal, [species, age]] = animalArray[i];
        newArray.push(`${currentAnimal} the ${species} is ${age}.`);
    }
    return newArray;
}