// YOUR CODE BELOW
function callThemAll(obj, val) {
    var returnArray = [];
    var valuesArray = Object.values(obj);

    for (i=0; i<valuesArray.length;i++) {
        if (typeof valuesArray[i] === "function") {
            returnArray.push(valuesArray[i](val));
        }

    }

    return returnArray;
}

let addsNums = {
    addTen: function(num) {
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
  };

// callThemAll(addsNums, 2);
