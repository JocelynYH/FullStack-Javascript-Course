// YOUR CODE BELOW
// function removeColumns(originalGrid, numColumns) {

//     originalRows = originalGrid.length;
//     originalArray = originalGrid[0];
//     originalColumns = originalArray.length;

//     newColumns = originalColumns - numColumns;

//     newArray = [];

//     for (i=0; i < newColumns; i++) {
//         newArray[i] = originalArray[i];
//     }

//     newGrid = [];
//     for (j=0; j<originalRows; j++) {
//         newGrid.push(newArray);
//     }

//     return newGrid;
// }

// let originalGrid = [
//     [1, 2, 3],
//     [1, 2, 3]
//   ];

// console.log(removeColumns(originalGrid, 1));

function removeColumns(originalGrid, numColumns) {
    newGrid = [];

    for (i=0; i < originalGrid.length; i++) {
        var currentRow = originalGrid[i];

        newGrid.push(currentRow.splice(0,currentRow.length-numColumns));

    }
    
    return newGrid;
}