let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(str) {
    dictionary = {};

    for (i=0;i<letters.length;i++) {
        dictionary[letters[i]] = leetChars[i];
    }

    strArray = str.toLowerCase().split("");

    var newString = "";

    strArray.forEach(function(letter) {
        if (letter.match(/[a-z]/i)) {
            newString += dictionary[letter];
        }
        else {
            newString += letter;

        }
    })

    return newString;
}


leetTranslator("cocoA Jocelyn.");