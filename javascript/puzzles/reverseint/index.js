// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // turn number to string, turn string to array, reverse it, then turn it back to string
  const reversed = n.toString().split("").reverse().join("");

  // convert string to integer and return it
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
