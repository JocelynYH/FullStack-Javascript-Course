// YOUR CODE BELOW
function lastFridayNight(transactions) {
    total = 0;
    for (i=0;i<transactions.length;i++) {
        total += transactions[i].amount;
    }
    return total;
}

