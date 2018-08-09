// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    if (currentNum > targetNum) {
        return "targetNum must be larger than currentNum";
    }

    else {
        var count = 0;
        while (currentNum < targetNum) {
            currentNum *= 2;
            count += 20;
        }

        return count;
    }
}

