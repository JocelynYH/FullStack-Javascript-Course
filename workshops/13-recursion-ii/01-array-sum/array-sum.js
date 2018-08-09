// YOUR CODE BELOW
function arraySum(arr) {
    var sum = 0;

    for (var i=0;i<arr.length;i++) {

        var element = arr[i]; 

        if (Array.isArray(element)) {
            sum += arraySum(element);
        }
        else {
            sum += element;
        }
    }

    return sum;
}


console.log(arraySum([1, [2, 3, [4]]]));


// // YOUR CODE BELOW
// function arraySum(arr) {
//     var sum = 0;

//     arr.forEach(function(elemOrArr)  {
//         if (Array.isArray(elemOrArr)) {
//             sum += arraySum(elemOrArr);
//         }

//         else {
//             sum += elemOrArr;
//         }

//     })

//     return sum;
// }

// console.log(arraySum([1, [2, 3, [4]]]));