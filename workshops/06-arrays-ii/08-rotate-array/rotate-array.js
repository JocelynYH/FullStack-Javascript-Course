// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
    if (rotateNum > 0) {
        removed = originalArray.splice(originalArray.length-rotateNum,originalArray.length);
        return removed.concat(originalArray);
    }

    if (rotateNum < 0) {
        removed = originalArray.splice(0, rotateNum*-1);
        return originalArray.concat(removed);
    }

    else {
        return originalArray;
    }

}

console.log(rotateArray([1, 2, 3, 4, 5], -1));