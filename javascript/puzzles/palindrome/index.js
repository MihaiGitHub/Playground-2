// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // turn string to array, reverse it, then turn back into a string
  const reversed = str.split("").reverse().join("");

  // if str is equal to reversed it will return true else false
  return str === reversed;
}

module.exports = palindrome;
