/*
Pangram
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.

Tests:
Passed:1. isPangram("hello", "helo") should return true
Passed:2. isPangram("hello", "hel") should return false
Passed:3. isPangram("hello", "helow") should return false
Passed:4. isPangram("hello world", "helowrd") should return true
Passed:5. isPangram("Hello World!", "helowrd") should return true
Passed:6. isPangram("Hello World!", "heliowrd") should return false
Passed:7. isPangram("freeCodeCamp", "frcdmp") should return false
Passed:8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true
*/

function isPangram(sentence, letters) {
  const sentenceSet = new Set(sentence.toLowerCase());
  const letterSet = new Set(letters.toLowerCase());

  sentenceSet.forEach(char => {
    if (/\W/.test(char))
      sentenceSet.delete(char);
  });

  return (sentenceSet.symmetricDifference(letterSet).size === 0) ? true : false;
}
