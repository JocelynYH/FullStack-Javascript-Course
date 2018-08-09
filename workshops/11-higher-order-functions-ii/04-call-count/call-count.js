// YOUR CODE BELOW

var count = 0; 

function callCount() {
    return function() {
        count += 1;
        return count;
    }
}