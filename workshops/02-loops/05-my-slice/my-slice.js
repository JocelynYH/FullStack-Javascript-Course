// YOUR CODE BELOW
// function mySlice(originalString, startIdx, endIdx) {
//    if (startIdx == null && endIdx == null) {
//        return originalString;
//    } 

//    else if (endIdx == null) {
//        return originalString.substring(startIdx, originalString.length);
//    }

//    else if (startIdx == null) {
//     return originalString.substring(0, endIdx);
//     }

//     else {
//         return originalString.substring(startIdx, endIdx);
//     }
// }

// console.log(mySlice("slice and dico", 2, 5));

function mySlice(originalString, startIdx=0, endIdx=originalString.length) {
    var newStr = "";
    for (var i = startIdx; i<endIdx; i++) {
        newStr += originalString[i];
    }

    return newStr;
}

console.log(mySlice("cocoa bella", 3,6));