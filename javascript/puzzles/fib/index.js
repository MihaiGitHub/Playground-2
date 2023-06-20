// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // get a head start with a 2 element array because 0 and 1 will always be there
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    // pull out previous 2 records and push them into the final (result) array
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

module.exports = fib;
