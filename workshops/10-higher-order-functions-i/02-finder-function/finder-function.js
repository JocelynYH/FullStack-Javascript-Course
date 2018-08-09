// YOUR CODE BELOW
// function finderFunction(array, func) {
//     array.forEach(func) {
//         if (func(idx)) {
//             return idx;
//         }
//         else {
//             return -1;
//         }
//     }
// }

function finderFunction(array,func) {
    for (i=0; i<array.length; i++) {
        if (func(array[i])) return i;
    }
    return -1;
}