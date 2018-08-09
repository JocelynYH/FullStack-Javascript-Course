// YOUR CODE BELOW
var count = 0;
function backwardString(str) {
    console.log(str[str.length -1]);
    if (str.length > 1) backwardString(str.slice(0,-1));
}
