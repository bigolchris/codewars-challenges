// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let string = s.split(" ");
  let smallest = string[0];
  for (let i = 0; i < string.length; i++) {
    if (string[i].length < smallest.length) {
      smallest = string[i];
    }
  }
  return smallest.length;
}
