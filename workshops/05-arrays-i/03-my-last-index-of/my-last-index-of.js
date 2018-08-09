// YOUR CODE BELOW
// function myLastIndexOf(array, searchValue, startIdx=0) {
//     if (startIdx != 0) {
//         arraySlice = array.slice(0, startIdx+1);
//         reverseArray = arraySlice.reverse();

//         for (i=reverseArray.length - 1 ; i>= 0; i--) {
//             if (reverseArray[i] == searchValue) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//     arraySlice = array.slice(startIdx);
//     reverseArray = arraySlice.reverse();

//     for (i=0; i<reverseArray.length; i++) {
//         if (reverseArray[i] == searchValue) {
//             return array.length - i -1;
//         }
//     }
//     return -1;
// }

function myLastIndexOf(array, searchValue, startIdx=array.length) {
    for (i=startIdx; i >=0; i--) {
        if (array[i] == searchValue) return i;
    }

    return -1;
}
