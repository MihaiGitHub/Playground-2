// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // turn string to array and use reduce to condense all values in the array to a single string value
  return str.split("").reduce((reversed, character) => {
    debugger;
    // arg1 - arrow function, arg2 - starting an initial value for the function
    return character + reversed;
  }, "");
}

// need to call the function to use the debugger
reverse("asdf");

// Using the debugger
// add debugger keyword
// in terminal - node inspect <filename>
// to continue execution until next debugger statement - c
// to inspect variables at this point in time enter the repl - repl
// type the name of the variable to look at it
// ctrl + c to exit repl then c to continue the execution again

function reverse2(str) {
  let reversed = "";

  // ES2015 syntax for for loop
  for (let character of str) {
    // add the current character to the start of the string reversed
    reversed = character + reversed;
  }

  return reversed;
}

function reverse3(str) {
  // take the string and turn it into an array with every element in that array consisting of a
  // different character from the string
  const arr = str.split("");

  // reverse array using javascript reverse method
  arr.reverse();

  // join all elements back into a string
  return arr.join("");
}

module.exports = reverse;
