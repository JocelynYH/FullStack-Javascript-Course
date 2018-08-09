// YOUR CODE BELOW
function compareObjects(arg1, arg2) {

    keys1 = Object.keys(arg1);
    keys2 = Object.keys(arg2);
    values1 = Object.values(arg1);
    values2 = Object.values(arg2);
    if ((JSON.stringify(keys1) == JSON.stringify(keys2)) && (JSON.stringify(values1) == JSON.stringify(values2))) {
        return true;
    }
    return false;
}


// console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 2}));


// arg1 = {
//     name: 1,
//     species: 2
// }

// arg2 = {
//     name: 1,
//     species: 2
// }
// console.log(Object.keys(arg1));
// console.log(Object.keys(arg2));
// console.log(Object.values(arg1));
// console.log(Object.values(arg2));

// console.log(Object.keys(arg1) == Object.keys(arg2));
// console.log(Object.values(arg1) == Object.values(arg2));

