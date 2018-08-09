// YOUR CODE BELOW
// function myIndexOf(source, searchValue) {
//     var strLen = searchValue.length;
//     var srcLen = source.length;

//     for (var i = 0; i < srcLen - strLen; i++) {
//         var curSrcSubset = '';
//         var curIndex = i;
//         for (var j = 0; j <= srcLen; j++) {
//             curSrcSubset += source[curIndex];
//             curIndex++;
//         }
//         if (curSrcSubset == searchValue) {
//             return i;
//         }
//     }
// }

// console.log(myIndexOf('hello', 'e'));

function myIndexOf(source, searchValue, startIdx=0) {
    var searchStrLen = searchValue.length;
    var srcLen = source.length;

    for (var i = startIdx; i <= srcLen - searchStrLen; i++) {
        var curSrcSubset = source.substr(i,searchStrLen);
        if (curSrcSubset == searchValue) {
            return i;
        }
    }
    return -1;
}
