// YOUR CODE BELOW
function exponentiate(base, power) {
    if (power == 0) {
        return 1;
    }
    
    expNum = base;
    for (var i=1; i < power; i++) {
        expNum *= base;
        console.log(expNum);
    }
    return expNum;
}


