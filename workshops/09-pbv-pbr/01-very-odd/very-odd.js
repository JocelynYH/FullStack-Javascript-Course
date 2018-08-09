// YOUR CODE BELOW
function veryOdd(arr) {
    var newArr = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}