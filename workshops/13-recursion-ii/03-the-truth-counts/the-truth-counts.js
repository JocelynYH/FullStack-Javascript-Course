// YOUR CODE BELOW
function theTruthCounts(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i ++) {
        var element = arr[i];

        if (Array.isArray(element)) {
            var nestedCount = theTruthCounts(element);
            if (nestedCount > 0) count += nestedCount;
        }
        else {
            if (element) count += 1;
        }
    }

    return count;
}

let values = [1, ['true', [true, 0, 'you bet!', 20], true, null], undefined, ['yes', false, 0]];

var result = theTruthCounts(values);
console.log(result);