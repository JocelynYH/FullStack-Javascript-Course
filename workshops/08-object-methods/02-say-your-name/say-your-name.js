// YOUR CODE BELOW
var me2 = {
    name: "Tom Riddle",
    myGreeting: function() {
        return `Hi, my name is ${me2.name}.`
    },
    getGreeting: function(you) {
        return `Hi ${you.name}, my name is ${this.name}.`;
    }
}

