// YOUR CODE BELOW
function mySlice(originalArray, startIdx=0, endIdx=originalArray.length) {
    newArray = [];

    if (startIdx < 0) {
        startIdx = originalArray.length + startIdx;
    }

    if (endIdx < 0) {
        endIdx = originalArray.length + endIdx;
    }
    for (i=startIdx; i < endIdx; i++) {
        newArray.push(originalArray[i]);
    }

    return newArray;
}


mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 2);
