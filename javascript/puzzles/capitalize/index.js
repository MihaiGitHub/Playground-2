// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // create an array to hold the separate words of the string
  const words = [];

  // split string by the spaces (to get separate words)
  for (let word of str.split(" ")) {
    // capitalize first letter, concatenate to the rest of the string and push it into words array
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  // turn words array into a string and return it
  return words.join(" "); // adds space between each array element when joining into a string
}

function capitalize2(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
