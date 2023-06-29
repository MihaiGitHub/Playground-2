// convert object to array

const myObject = {
  a: 1,
  b: 2,
  c: ["a", "b", "c"],
  d: { name: "Mike", age: 38, address: { city: "Denver", state: "CO" } },
  5: "something",
  6: true,
};

let myArray = [];

for (let item in myObject) {
  if (typeof myObject[item] === "object") {
    if (Array.isArray(myObject[item])) {
      myArray.push(myObject[item]);
    } else {
      myArray.push(Object.values(myObject[item]));
    }
  } else {
    myArray.push(myObject[item]);
  }
}

console.log("array ", myArray);
