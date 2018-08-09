// YOUR CODE BELOW
function myJoin(array, separator=',') {
    myString = "";

    for (i=0; i<array.length; i++) {
        var currentWord = array[i];
        if (array[i] == undefined || array[i] == null) {
            currentWord = "";
        }

        if (i == array.length - 1) {
            myString += currentWord;
        }
        else {
            myString += currentWord + separator;
        }
    }

    return myString;
}

console.log(myJoin(['let\'s', 'make', 'a', 'list'], ', '));