// YOUR CODE BELOW
function getDogBreeder(nameDef, ageDef) {
    return function(nameArg=nameDef, ageArg=ageDef) {
        if (typeof nameArg === 'number') {
            ageArg = nameArg;
            nameArg = nameDef;
        }

        var returnVal = 
        {name: nameArg,
        age: ageArg}

        return returnVal;
    }
}

let dogBreeder = getDogBreeder('Rufus', 5)
let returnedValue = dogBreeder(10);

let expectedValue = {
    name: 'Rufus',
    age: 10
};

console.log(returnedValue);