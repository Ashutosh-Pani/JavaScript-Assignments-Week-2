/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const stringArr = str.split("");
  let totalVowels = 0;
  for (let i = 0; i < stringArr.length; i++) {
    if (
      stringArr[i] == "a" ||
      stringArr[i] == "A" ||
      stringArr[i] == "e" ||
      stringArr[i] == "E" ||
      stringArr[i] == "i" ||
      stringArr[i] == "I" ||
      stringArr[i] == "o" ||
      stringArr[i] == "O" ||
      stringArr[i] == "u" ||
      stringArr[i] == "U"
    ) {
      totalVowels++;
    }
  }
  return totalVowels;
}

module.exports = countVowels;
