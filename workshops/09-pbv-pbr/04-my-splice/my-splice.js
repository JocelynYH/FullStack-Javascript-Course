// YOUR CODE BELOW
// function mySplice(arr, begIdx=0, spliceLen=0 , toAdd=null) {
//     var endIdx = begIdx + spliceLen;
    
//     var firstSplice = arr.slice(0, begIdx);
//     var secondSplice = arr.slice(endIdx, arr.length);

//     if (toAdd != null) {
//         firstSplice = firstSplice.push(toAdd);
//     }

//     arr = firstSplice.concat(secondSplice);
//     return arr;
// }

// let ourStuff = ['food', 'trash', 'clothes'];

// console.log(mySplice(ourStuff, 1, 1));
// console.log(ourStuff);

function mySplice(arr, indexStartDelete, deleteLength = null, sub = undefined) {
    var newArr = [];
    for (i=0; i<indexStartDelete; i++) {
        newArr.push(arr[i]);
    }

    if (sub != undefined) {
        newArr.push(sub);
    }

    if (deleteLength != null) {
        for (j=indexStartDelete + deleteLength; j<arr.length; j++) {
            newArr.push(arr[j]);
        }
    }

    var removedElements = [];

    for (z=indexStartDelete; z < indexStartDelete + deleteLength; z++) {
        removedElements.push(arr[z]);
    }

    while (arr.length) {
        arr.pop();
    }

    for (m=0; m<newArr.length; m++) {
        arr.push(newArr[m]);
    }

    return removedElements;

}

let ourStuff = ['food', 'trash', 'clothes'];

mySplice(ourStuff, 1, 1);
