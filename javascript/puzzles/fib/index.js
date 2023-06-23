// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// fast runtime algorithm using memoize
function memoize(fn) {
  // declare storage area
  const cache = {};

  // take all arguments coming in and assign them as an array called args
  return function (...args) {
    // check if this function has been called with the same arguments before
    if (cache[args]) {
      // if have seen these arguments before don't call the actual function again and just return from cache
      return cache[args];
    }

    // if pass above statement, call slowFib function
    const result = fn.apply(this, args);

    // store result from slowFib in cache
    cache[args] = result;

    return result;
  };
}

// bad runtime algorithm (exponential)
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return slowFib(n - 1) + slowFib(n - 2);
}

// good runtime algorithm (linear)
function fib2(n) {
  // get a head start with a 2 element array because 0 and 1 will always be there
  const result = [0, 1];

  // create the rest of the series starting with the 3rd element
  for (let i = 2; i <= n; i++) {
    // pull out previous 2 records and push them into the final (result) array
    const a = result[i - 1];
    const b = result[i - 2];

    // add the previous two elements and push them into the result array
    result.push(a + b);
  }

  // return the requested element from the array
  return result[n];
}

const fib = memoize(slowFib);

module.exports = fib;
