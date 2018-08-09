// // YOUR CODE BELOW
// var vowelCount = 0;

// function countVowels(str) {
//     if (str.length === 0) {
//         return vowelCount;
//     }
//     else {
//         if (str[str.length-1].match(/[AEIOUaeiou]/gi)) {
//             vowelCount += 1;
//         } 
//         return countVowels(str.slice(0,-1));
//     } 
    
// }

// let returnedValue = countVowels('life is like a box of chocolates');
// console.log(returnedValue);

const countVowels = (str) => {
    var vowels = "AEIOUaeiou";

    if (!str.length) return 0;

    var firstChar = str[0];

    if (vowels.indexOf(firstChar) != -1) return 1 + countVowels(str.slice(1));

    else return countVowels(str.slice(1));

}


let returnedValue = countVowels('life is like a box of chocolates');
console.log(returnedValue);
