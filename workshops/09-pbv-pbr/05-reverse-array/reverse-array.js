// YOUR CODE BELOW
function reverseArray(arr) {
    var newArr = [];
    for (i=arr.length-1; i>=0; i--) {
        newArr.push(arr[i]);
    }

    while(arr.length) {
        arr.pop();
    }

    for (j=0;j<newArr.length;j++) {
        arr.push(newArr[j]);
    }

    return arr;
}

// function reverseArray(arr) {
//   let newArr = [];
//   while (arr.length) {
//     newArr.push(arr.pop());
//   }
//   while (newArr.length) {
//     arr.unshift(newArr.pop());
//   }
//   return arr;
// }

// let myArray = [1, 2, 3, 4];
// reverse(myArray);
// console.log(reverse(myArray));