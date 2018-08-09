// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
    sampleArr = [];
    gridArr = [];
    for (i=1; i <= numColumns; i++) {
        sampleArr.push(i);
    }

    for (j=0; j< numRows; j++) {
        gridArr[j] = sampleArr;
    }

    return gridArr;
}

console.log(makeGrid(3,4));