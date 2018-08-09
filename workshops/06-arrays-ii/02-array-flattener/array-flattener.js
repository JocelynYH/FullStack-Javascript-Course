// YOUR CODE BELOW
function arrayFlattener(arr) {
    newArr = [];
    for (i=0; i<arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (j=0; j<arr[i].length; j++) {
                newArr.push(arr[i][j]);
            }
        }

        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(arrayFlattener([1,[2, 3], 4]));