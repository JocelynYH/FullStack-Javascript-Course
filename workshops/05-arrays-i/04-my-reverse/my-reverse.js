// YOUR CODE BELOW
function myReverse(arr) {
    reverseArray = [];

    for (i=arr.length-1; i>=0; i--) {
        reverseArray.push(arr[i]);
    }

    return reverseArray;
}