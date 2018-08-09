// YOUR CODE BELOW
function myForEach(arr, callback) {
    for (i=0; i<arr.length; i++) {
        var curElement = arr[i];
        callback(curElement, i, arr);
    }
}

