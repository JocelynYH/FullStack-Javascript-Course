// YOUR CODE BELOW
function partial(func, arg) {
    return function(arg2) {
        return func(arg, arg2);
    }
}


function summer (a, b) {
    return a + b
  };
  
  let sumFive = partial(summer, 5);
  console.log(sumFive(10));