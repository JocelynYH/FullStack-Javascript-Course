function nearest_larger(arr, i, indxRange = 1) {
  var h = i - indxRange;
  var j = i + indxRange;

  if (arr[h]) var left = arr[h];
  else var left = 1;

  var middle = arr[i];

  if (arr[j]) var right = arr[j];
  else var right = 1;

  if (indxRange > Math.floor(arr.length/2)) return null;

  
  if (left > middle) return h; 
  else if (left < middle && right > middle) return j;
  else if (left < middle && right < middle) {
      return nearest_larger(arr, i, indxRange+1);
      // else return null;
  }
}


var result = nearest_larger([2, 6, 9, 4, 8], 3);
console.log(result);
// console.log(nearest_larger([2, 6, 9, 4, 8], 3));



// CodeWars Prime Factorization
class PrimeFactorizer {
  constructor(n) {
    this.n = n;
    this.num = n;
  }
    get factor() {
      return this.calcFactors();
    }

    calcFactors() {
      var factors = {};
      var num = this.n;
      var j = 2;
        while (num > 1) {
            if ( num % j === 0) {
              if (factors.hasOwnProperty(j)) factors[j] += 1;
              else (factors[j] = 1);
    
              num = num /j;
            }
            else j++;
        }
        return factors;

      }
  }


  //  Replace primes interview:

// ex: 2,4,6,8 => 3,4,6,8
// 2,3,5,7,9 => 3,5,7,13,9

// function prime(n) {
//   if (n === 2) return true;

//   for (var i = 2; i <= n; i++) {
//     if (n % i === 0 && i === n) return true;
//     else if (n % i === 0 && i !== n ) return false;
//   }


//   return false;
// }

// function nextPrime(n) {
//   var nextPrimeNum = n;
//   var j = n + 1;
//   for (var i = n; n !== j; j++) {
//     var a = 1;
//     while (a !== 0) {
//       a += 1;
//       if (j % a === 0 && j !== a) break;
//       else if (j % a === 0 && j === a) return j;
//     }
//   }
// }

// function replacePrimes(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     if (prime(num) === true) arr[i] = nextPrime(num);
//   }  
//   return arr;
// }

// var result = replacePrimes([2,3,7,11]);
// console.log(result);


//////
// return array of unique elements 
function uniques(arr) {
  count = {};
  var returnArr = [];
  arr.forEach(function(num) {
    if (count.hasOwnProperty(num) === false) count[num] = 1;
    else count[num] += 1;
  });

  for (number in count) {
    if (count[number] === 1) returnArr.push(parseInt(number));
  }

  return returnArr;
}

var result = uniques([1,2,2,3,4,5,5,5,6]);
console.log(result);

// LeetCode 290
var wordPattern = function(pattern, str) {
  var patternArr = pattern.split("");
  var strArr = str.split(" ");
  
  var dictionary = {};
  
  for (var i = 0; i < patternArr.length; i++) {
      var currentLetter = patternArr[i];
      var currentStr = strArr[i];
      
      var values = Object.values(dictionary);
      
      if (dictionary.hasOwnProperty(currentLetter) === false && values.indexOf(currentStr) === -1) dictionary[currentLetter] = currentStr;
      else if (dictionary[currentLetter] !== currentStr) return false;
      else if (dictionary.hasOwnProperty(currentLetter) === false && values.indexOf(currentStr) > 0) return false;
  return true;
  }
}