/*
Lucky Number
Given a string of a person's first and last name, calculate their lucky number using the following rules:

First and last names are separated by a space
Find the vowel and consonant count for each name
Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
Do the same for the two larger counts and the larger name
Subtract the smaller value from the larger one to get their lucky number
If the final value is zero (0), return 13.

Tests:
Passed:1. getLuckyNumber("John Doe") should return 21.
Passed:2. getLuckyNumber("Olivia Lewis") should return 52.
Passed:3. getLuckyNumber("James Wilson") should return 18.
Passed:4. getLuckyNumber("Elizabeth Hernandez") should return 81.
Passed:5. getLuckyNumber("Mike Walker") should return 32.
Passed:6. getLuckyNumber("Chloe Perez") should return 13.
*/

function getLuckyNumber(name) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  const counts = name
    .toLowerCase()
    .split(" ")
    .map((name) => {
      const chars = Array.from(name);
      const length = name.length
      const vowels = chars
        .reduce((vowels, char) => VOWELS.includes(char) ? vowels + 1 : vowels, 0);
      const consonants = length - vowels;
      return {length, vowels, consonants};
    });

  const ascendingOrder = (a, b) => a - b;
  const toProperty = prop => obj => obj[prop];

  const vowels = counts.map(toProperty("vowels")).sort(ascendingOrder);
  const consonants = counts.map(toProperty("consonants")).sort(ascendingOrder);
  const lengths = counts.map(toProperty("length")).sort(ascendingOrder);

  const smallerProduct = vowels[0] * consonants[0] * lengths[0];
  const largerProduct = vowels[1] * consonants[1] * lengths[1];

  return largerProduct - smallerProduct || 13;
}
