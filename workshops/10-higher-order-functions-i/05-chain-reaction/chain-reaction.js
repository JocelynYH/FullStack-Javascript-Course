// YOUR CODE BELOW
// function chainReaction(startValue, array) {
//     var value = startValue;

//     for (i=0; i<array.length; i++) {
//         value = array[i](value);
//     }

//     return value;
// }

const chainReaction = (startValue, array) => {
    array.forEach((callback) => {
        startValue = callback(startValue);
    })
    return startValue;
}