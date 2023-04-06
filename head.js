const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function (actual) {
  return actual[0];
};


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Hi", "Hi");
// assertEqual(1, 67);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");