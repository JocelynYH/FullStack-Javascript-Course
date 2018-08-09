// YOUR CODE BELOW
function frequencyAnalysis(str) {
    var strFiltered = str.replace(/[^0-9a-z]+/g, ' ');
    var strArray = strFiltered.split("");

    var countArray = {};

    for (i=0;i<strArray.length;i++) {
        var currentLetter = strArray[i];
        if (currentLetter in countArray) {
            countArray[currentLetter] += 1;
        }

        else {
            countArray[currentLetter] = 1;
        }
    }

    return countArray;
}

frequencyAnalysis("I love -=-4p3]4l cocoa.");