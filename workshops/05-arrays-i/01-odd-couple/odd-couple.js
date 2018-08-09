// YOUR CODE BELOW
const oddCouple = (arr) => {
    newArray = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] % 2 == 1) {
            newArray.push(arr[i]);
        }

        if (newArray.length >= 2) {
            return newArray;
        }
    }
    return newArray;
}