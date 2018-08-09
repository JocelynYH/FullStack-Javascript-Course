var printNumTwo;

function doit() {
for (var i = 0; i < 3; i++) {
    if(i === 2){
        printNumTwo = function() {
        return i;
        };
    console.log(i);
    }
}
}

doit();