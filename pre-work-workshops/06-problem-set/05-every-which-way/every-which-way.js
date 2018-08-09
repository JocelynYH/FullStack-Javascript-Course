// YOUR CODE BELOW
// function everyWhichWay(arg1, arg2, arg3) {
//     if (arg1 + arg2 == arg3) {
//         return 'sum';
//     }

//     else if (arg1 - arg2 == arg3) {
//         return 'difference';
//     }

//     else if (arg1 * arg2 == arg3) {
//         return 'product';
//     }

//     else if (arg1 / arg2 == arg3) {
//         return 'fraction';
//     }

//     else {
//         return null;
//     }
// }

// const everyWhichWay = (arg1, arg2, arg3) => {
//     if (arg1 + arg2 == arg3) return 'sum';
//     if (arg1 - arg2 == arg3) return 'difference';
//     if (arg1 * arg2 == arg3) return 'product';
//     if (arg1 / arg2 == arg3) return 'fraction';
//     return null;
// }

const everyWhichWay = (arg1, arg2, arg3) => {
    if (arg1 + arg2 == arg3) {
        return 'sum';
    }

    else if (arg1 - arg2 == arg3) {
        return 'difference';
    }

    else if (arg1 * arg2 == arg3) {
        return 'product';
    }

    else if (arg1 / arg2 == arg3) {
        return 'fraction';
    }

    else {
        return null;
    }
}