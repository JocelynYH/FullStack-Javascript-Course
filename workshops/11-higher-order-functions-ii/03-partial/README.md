### Partial

Write a function, partial, that accepts a function and an argument. Partial
should return a new function. When invoked, the new functions will call the
original function, passing the original argument as the first argument to the
original function. The new function should return the value returned by the
original function.


```javascript
function summer (a, b) {
  return a + b
};

let sumFive = partial(summer, 5);
sumFive(10) // => 15;
```
