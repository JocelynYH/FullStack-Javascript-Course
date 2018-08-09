// YOUR CODE BELOW
const zeroDarkThirty = (num) => {
    num = String(num);
    if (num === "0") {
        return NaN;
    }

    else {
        return Number(num.replace(/0/g, ""));
    }
}