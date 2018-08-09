// YOUR CODE BELOW
var count = 0;

function cacheSavings(callback) {
    let cache = {};
    return function(arg) {
       if((arg in cache)) {
           return cache[arg];
       }

       var result = callback(arg);
       cache[arg] = result;
       return cache[arg];
    }
}
