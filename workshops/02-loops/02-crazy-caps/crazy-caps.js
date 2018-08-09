// YOUR CODE BELOW
const crazyCaps = (str) => {
    capitalizedString = '';
    for (i = 0; i<str.length; i++) {
        if (i % 2 != 0) {
            capitalizedString += str[i].toUpperCase();
        }

        else {
            capitalizedString += str[i];
        }
    }
    
    return capitalizedString;
}

