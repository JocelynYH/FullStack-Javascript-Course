// YOUR CODE BELOW
var sum = 0;
function sumNums(num) {
    if (num === 1) return num;
    return num + sumNums(num-1);
}

sumNums(6);