// // YOUR CODE BELOW
// function evenAndOdd(arr) {
//     oddArr = [];
//     evenArr = [];
//     newArr = [];

//     counterOdd = 0;
//     counterEven = 0;

//     for (i=0; i<arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             evenArr[counterEven] = arr[i];
//             counterEven ++;
//         }

//         else {
//             oddArr[counterOdd] = arr[i];
//             counterOdd ++;
//         }
//     }

//     newArr[0] = evenArr;
//     newArr[1] = oddArr;

//     return newArr;
// }

// console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));

function evenAndOdd(arr) {
    oddArr = [];
    evenArr = [];

    for (i=0; i<arr.length; i++) {
        if (arr[i] % 2 == 0)  evenArr.push(arr[i]);

        else oddArr.push(arr[i]);
    }

    return [evenArr, oddArr];
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));

