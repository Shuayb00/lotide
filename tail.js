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
const tail = function (actual) {
  return actual.slice(1);
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Hi", "Hi");
// assertEqual(1, 67);
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!