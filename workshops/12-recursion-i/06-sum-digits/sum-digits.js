// YOUR CODE BELOW
// function sumDigits(int) {
//     var intToArray = int.toString().split("");
//     var intArray = [];
//     intToArray.forEach(function(element){
//         intArray.push(parseInt(element, 10));
//     });

//     const sum = (a,b) => a+b;
//     return intArray.reduce(sum);

// }

function sumDigits(num) {
    var numString = String(num);

    if (numString.length === 1) return num;

    var sum = 0;
    var currentNum = Number(numString[0]);

    sum += currentNum;

    var nextNumber = Number(numString.slice(1));

    sum += sumDigits(nextNumber);

    return sum;


}