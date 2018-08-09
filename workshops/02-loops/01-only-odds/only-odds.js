function onlyOdds(num) {
    sum = 0;
    if (num < 1) {
        return 0;
    }
    else {
        for (let i = num; i >= 1; i--) {
            if (i % 2 == 1) {
                sum += i;
            }
        }
    return sum;
    }
}
