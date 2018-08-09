// YOUR CODE BELOW
// const onlyOne = (arg1, arg2, arg3) => {
//     if (arg1 && arg2 && arg3) {
//         return false;
//     }

//     if (arg1 && arg2 || arg1 && arg3 || arg2 && arg3) {
//         return false;
//     }

//     if (!arg1 && !arg2 && !arg3) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// console.log("fdskl" && null);

const onlyOne = (arg1, arg2, arg3) => {
    return (!!arg1 && !arg2 && !arg3) || (!arg1 && !!arg2 && !arg3) || (!arg1 && !arg2 && !!arg3);
}