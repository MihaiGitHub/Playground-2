// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// helper function to build a character map
function buildCharMap(str) {
  const charMap = {};

  // clean string and loop through it
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    // create object key and increment its value, if not there add it with value 1
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams2(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // not an anagram because one has more characters than the other
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    // not an anagram because there are different object keys so not the same letters
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

// solution 2
function cleanString(str) {
  // clean string, turn to array, sort it, then turn back into a string
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
function anagrams(stringA, stringB) {
  // compare the cleaned strings to see if they have same characters
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
