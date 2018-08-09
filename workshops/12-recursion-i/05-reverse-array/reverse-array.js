// YOUR CODE BELOW
var returnArray = [];
function reverseArray(arr) {
    var len = arr.length;
    if (!arr.length) {
        return arr;
    }

    var lastChar = arr[len - 1];


    return returnArray.concat(lastChar, reverseArray(arr.slice(0,-1)));
}

let arr = [1,2,3,4]
let reversedArr = reverseArray(arr);

console.log(reversedArr); 
console.log(arr);