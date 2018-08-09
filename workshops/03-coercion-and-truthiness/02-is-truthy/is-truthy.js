// YOUR CODE BELOW
const isTruthy = (arg) => {

    if (arg) return true;

    switch (arg) {
        case false:
            return 'The boolean value false is falsey';
        case null:
            return 'The null value is falsey';
        case undefined:
            return 'undefined is falsey';
        case 0:
            return 'The number 0 is falsey (the only falsey number)';
        case "":
            return 'The empty string is falsey (the only falsey string)';
        case " ":
    }


}

