// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // g = don't stop at first match, find them all, i = case insensitive
  // match returns array with matches; if no matches found it will return null
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

function vowels2(str) {
  let count = 0;
  const checker = "aeiou";

  for (let char of str.toLowerCase()) {
    // includes works on strings and arrays alike
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;
