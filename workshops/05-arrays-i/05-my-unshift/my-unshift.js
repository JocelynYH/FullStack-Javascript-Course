// YOUR CODE BELOW
// function myUnshift(arr, value) {
//     arr.splice(0,0,value);
//     return arr;
// }

function myUnshift(arr,value) {
    return [value, ...arr];
}