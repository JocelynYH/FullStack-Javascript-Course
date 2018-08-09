// YOUR CODE BELOW
function isPalindrome(str) {
    str = str.toLowerCase();
    
    if (!str.length) {
        return true;
    }

    var endLetter = str[str.length -1];
    var begLetter = str[0];

    if (begLetter === endLetter) {
        return isPalindrome(str.slice(1,-1));
    }

    else {
        return false && isPalindrome(str.slice(1,-1))
    }
}

