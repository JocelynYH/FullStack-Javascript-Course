// YOUR CODE BELOW
function mostVowels(str) {
    str = str.replace(/\.|\,/g,'').toLowerCase()
    console.log("strArray", strArray);
    var strArray = str.split(" ");
    console.log(strArray);

    var vowelsPerWord = [];
    var totalVowelCount = 0;
    for (var i = 0; i <= strArray.length-1; i++) {
    
        var vowelcount=0;
        for (var j = 0; j <= strArray[i].length; j++) {
            if (strArray[i][j] == 'a' ||strArray[i][j] == 'e' || strArray[i][j] == 'i' || strArray[i][j] == 'o' || strArray[i][j] == 'u') {
                vowelcount ++;
            }
        }
        vowelsPerWord.push(vowelcount);
        totalVowelCount += vowelcount;
    }
    if (totalVowelCount == 0) {
        return '';
    }
    else {
        var arrayMax = Math.max(...vowelsPerWord);
        var indexOfMaxNumber = vowelsPerWord.indexOf(arrayMax);
        return strArray[indexOfMaxNumber];
    }
}

console.log(mostVowels('Give her hell from us, Peeves.'));


// function vowelCount(word) {
//     var count = 0;
//     for (var i = 0, word.length-1, i++) {
//         count++;
//     }
// }

// var a_word = {
//     vowels = vowelCount(a_word);
// }