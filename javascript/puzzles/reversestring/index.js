// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
  let reversed = "";

  // ES2015 syntax for for loop
  for (let character of str) {
    // add the current character to the start of the string reversed
    reversed = character + reversed;
  }

  return reversed;
}

function reverse2(str) {
  // take the string and turn it into an array with every element in that array consisting of a
  // different character from the string
  const arr = str.split("");

  // reverse array using javascript reverse method
  arr.reverse();

  // join all elements back into a string
  return arr.join("");
}

module.exports = reverse;
