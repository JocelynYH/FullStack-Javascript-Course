// YOUR CODE BELOW
// const myOr = (arg1, arg2, arg3) => {
//     if (arg1) return true;
//     if (arg2) return true;
//     if (arg3) return true;
//     return false;
// }

// const myAnd = (arg1, arg2, arg3) => {
//     if (!!arg1 === !!arg2 === !!arg3) {
//         if (arg1) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     return false;
// }

// console.log(myOr("",0,null));

const myOr = (arg1, arg2, arg3) =>  arg1 || arg2 || arg3;

const myAnd = (arg1, arg2, arg3) => arg1 && arg2 && arg3;

console.log(myOr('apples', 1, false));